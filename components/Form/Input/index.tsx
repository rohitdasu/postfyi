import React, { InputHTMLAttributes, forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type, placeholder, name, register }, ref) => {
    return (
      <div className="flex flex-col w-full gap-2">
        <input
          id={id}
          type={type}
          className="w-full p-4 font-medium border rounded-md border-gray-300 placeholder:opacity-50"
          placeholder={placeholder}
          autoComplete="off"
          spellCheck={true}
          {...register(name!)}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
