import { FormProvider, useForm } from 'react-hook-form';
import { BsSendFill } from 'react-icons/bs';
import { Input } from '../Input';

export const PostForm = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  const post_validation = {
    name: 'post',
    type: 'text',
    id: 'post',
    placeholder: 'enter your post',
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
            className="hover:bg-green-700 p-4 border-gray-300 bg-green-600 text-green-100 border rounded-md"
          >
            <BsSendFill className="text-xl" />
          </button>
        </form>
      </FormProvider>
    </>
  );
};
