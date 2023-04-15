import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { InputProps } from './Input.interface';
import { InputError } from './InputError';

export const Input: FC<InputProps> = ({
  id,
  type,
  placeholder,
  name,
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col w-full gap-2">
      <input
        id={id}
        type={type}
        className="w-full p-4 font-medium border rounded-md border-gray-300 placeholder:opacity-50"
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={true}
        {...register(name!, validation)}
      />
      <AnimatePresence mode="wait" initial={false}>
        {errors[name!] && <InputError message={errors[name!]!.message} />}
      </AnimatePresence>
    </div>
  );
};
