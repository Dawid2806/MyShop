import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useCreateReviews } from "../../hooks/useCreateReviews";

interface ProductReviewProps {
  productSlug: string;
}

const reviewSchema = yup
  .object({
    headline: yup.string().required(),
    content: yup.string().min(10).max(250).required(),
    name: yup.string().required(),
    rating: yup.number().min(1).max(5).required(),
    email: yup.string().email().required(),
  })
  .required();

type ReviewFormSchema = yup.InferType<typeof reviewSchema>;

export const ProductReviewForm = ({ productSlug }: ProductReviewProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormSchema>({
    resolver: yupResolver(reviewSchema),
  });

  const { createReview } = useCreateReviews({ productSlug });

  const onSubmit = handleSubmit((data) => {
    createReview({
      variables: {
        review: {
          ...data,
          product: {
            connect: {
              slug: productSlug,
            },
          },
        },
      },
      optimisticResponse: {
        __typename: "Mutation",
        review: {
          __typename: "Review",
          ...data,
          id: Math.random().toString(32),
        },
      },
    });
  });

  return (
    <form className=" max-w-md px-4 py-8 sm:px-6 lg:px-8" onSubmit={onSubmit}>
      <div className="my-2">
        <label htmlFor="name">Name</label>
        <div>
          <input className="rounded-md " type="text" {...register("name")} />
        </div>
      </div>
      <div className="my-2">
        <label htmlFor="name">Email</label>
        <div>
          <input className="rounded-md " type="text" {...register("email")} />
        </div>
      </div>
      <div>
        <label htmlFor="name">Headline</label>
        <div>
          <input
            className="rounded-md "
            type="text"
            {...register("headline")}
          />
        </div>
      </div>
      <div>
        <label htmlFor="name">Content</label>
        <div>
          <textarea className="rounded-md " {...register("content")} />
        </div>
      </div>
      <div>
        <label htmlFor="name">Rating</label>
        <div>
          <input
            className=" rounded-md  "
            type="number"
            {...register("rating")}
          />
        </div>
      </div>
      <button
        className="mt-1  w-full  px-6 py-3 text-sm font-bold uppercase tracking-wide sm:ml-4 sm:mt-0 sm:w-auto sm:flex-shrink-0"
        type="submit"
      >
        add review
      </button>
    </form>
  );
};
