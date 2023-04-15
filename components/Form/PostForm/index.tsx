import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { BsSendFill } from 'react-icons/bs';

export const PostForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form
        className="flex flex-row items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          id="post"
          placeholder="Enter your text"
          name="post"
          register={register}
        />
        <button className="hover:bg-green-700 p-4 border-gray-300 bg-green-600 text-green-100 border rounded-md">
          <BsSendFill className="text-xl" />
        </button>
      </form>
    </>
  );
};
