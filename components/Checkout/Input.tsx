import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type: string;
}

interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: string[];
}

const schema = yup
  .object({
    firstName: yup.string().required(),
  })
  .required();

export const Input = ({ name, label, type, placeholder }: InputProps) => {
  const { register, formState } = useFormContext();
  const error = formState.errors[name];

  return (
    <div className={`col-span-6`}>
      <label htmlFor={name} className="block text-xs font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        {...register(name)}
        className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
        placeholder={placeholder}
      />
      {error && (
        <span className="text-red-500 text-sm ml-1">
          {error.message as ReactNode}
        </span>
      )}
    </div>
  );
};

export const Select = ({ name, label, options }: SelectProps) => {
  const { register, formState } = useFormContext();
  const error = formState.errors[name];
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <select
        {...register(name)}
        className="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-red-500 text-sm ml-1">
          {error.message?.toString()}
        </span>
      )}
    </div>
  );
};
