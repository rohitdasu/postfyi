import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BsSendFill } from 'react-icons/bs';
import { ImSpinner9 } from 'react-icons/im';
import { Input } from '../Input';
import axios from 'axios';
import { mutate } from 'swr';

export const PostForm = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit(async (data) => {
    const url = '/postify/api/v1/posts';
    try {
      setIsLoading(true);
      await axios.post(url, { title: data.post });
      mutate('/postify/api/v1/posts');
    } catch (e) {
      console.error(e);
      alert('failed :(');
    } finally {
      setIsLoading(false);
      methods.reset();
    }
  });

  const post_validation = {
    name: 'post',
    type: 'text',
    id: 'post',
    placeholder: 'enter an anonymous post',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 100,
        message: '100 characters max',
      },
    },
  };

  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-row items-start gap-2"
        >
          <Input {...post_validation} />
          <button
            onClick={onSubmit}
            disabled={isLoading}
            className="hover:bg-green-700 p-4 border-gray-300 bg-green-600 text-green-100 border rounded-md"
          >
            {!isLoading ? (
              <BsSendFill className="text-xl" />
            ) : (
              <ImSpinner9 className="text-xl animate-spin" />
            )}
          </button>
        </form>
      </FormProvider>
    </>
  );
};
