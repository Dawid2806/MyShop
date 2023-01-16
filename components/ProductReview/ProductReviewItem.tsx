import React from "react";
import { ReviewContentFragment } from "../../src/generated/graphql";
import Rating from "@mui/material/Rating";

interface ProductReviewItemProps {
  review: ReviewContentFragment;
}
export const ProductReviewItem = ({ review }: ProductReviewItemProps) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
      <blockquote>
        <header className="sm:flex sm:items-center">
          <div className="-ml-1 flex">
            <Rating name="read-only" value={review.rating} readOnly />
          </div>

          <p className="mt-2 font-medium sm:ml-4 sm:mt-0">{review.headline}</p>
        </header>

        <p className="mt-2 text-gray-700">{review.content}</p>

        <footer className="mt-4">
          <p className="text-xs text-gray-500">{review.name}</p>
        </footer>
      </blockquote>
    </div>
  );
};
