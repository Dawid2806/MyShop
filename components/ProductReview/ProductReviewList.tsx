import React from "react";
import { useGetReviewsForProductsSlugQuery } from "../../src/generated/graphql";
import { ProductReviewItem } from "./ProductReviewItem";
import Rating from "@mui/material/Rating";
interface ProductReviewListProps {
  productSlug: string;
}

export const ProductReviewList = ({ productSlug }: ProductReviewListProps) => {
  const { data, loading, error } = useGetReviewsForProductsSlugQuery({
    variables: {
      slug: productSlug,
    },
  });

  if (!data?.product) {
    return null;
  }
  const averageRating =
    data.product.reviews.reduce(
      (sum, review) => (review.rating ? sum + review.rating : sum),
      0
    ) / data.product.reviews.length;
  return (
    <section>
      {data.product.reviews.length > 0 && (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold sm:text-2xl">Customer Reviews</h2>

          <div className="mt-4 flex items-center">
            <p className="text-3xl font-medium">
              {averageRating}
              <span className="sr-only"> Average review score </span>
            </p>

            <div className="ml-4">
              <div className="-ml-1 flex">
                <Rating name="read-only" value={averageRating} readOnly />
              </div>
            </div>
          </div>
          {data.product.reviews.map((review) => {
            return <ProductReviewItem key={review.id} review={review} />;
          })}
        </div>
      )}
    </section>
  );
};
