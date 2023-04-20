import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BsSendFill } from 'react-icons/bs';
import { ImSpinner9 } from 'react-icons/im';
import { Input } from '../Input';
import axios from 'axios';

interface IProps {
  fn: Function;
}

export const PostForm: React.FC<IProps> = ({ fn }) => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit(async (data) => {
    const url = '/postify/api/v1/posts';
    try {
      setIsLoading(true);
      // first post the data, then run the prop function
      // so the mutateKey will be changed and data will be revalidated in Posts FC
      await axios.post(url, { title: data.post }).then(() => {
        fn();
      });
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
    placeholder: 'Share anonymous post',
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
            className="p-4 text-green-100 bg-green-600 border border-gray-300 rounded-md hover:bg-green-700"
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
