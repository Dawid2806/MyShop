import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";

interface IFormInputs {
  email: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();
export const NewsLetterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const { mutate, error } = useMutation(
    "add-to-newsletter",
    async ({ email }: { email: string }) => {
      await fetch("http://localhost:3000/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
    }
  );

  const onSubmit = (data: IFormInputs) => mutate(data);
  return (
    <form className="w-full text-white" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email" className="sr-only">
        {" "}
        Email{" "}
      </label>

      <div className="border border-white/10 p-2 sm:flex sm:items-center">
        <input
          className="h-12 w-full border-none bg-transparent p-3 text-sm font-medium uppercase tracking-widest placeholder-gray-400"
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email")}
        />

        <button
          className="mt-1 h-12 w-full bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide sm:ml-4 sm:mt-0 sm:w-auto sm:flex-shrink-0"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};
