import React from "react";
import {
  GetReviewsForProductsSlugDocument,
  GetReviewsForProductsSlugQuery,
  useCreateProductReviewMutation,
} from "../src/generated/graphql";
interface CreateReviewProps {
  productSlug: string;
}
export const useCreateReviews = ({ productSlug }: CreateReviewProps) => {
  const [createReview, { data, loading, error }] =
    useCreateProductReviewMutation({
      update(cache, result) {
        const originalReviewsQuery =
          cache.readQuery<GetReviewsForProductsSlugQuery>({
            query: GetReviewsForProductsSlugDocument,
            variables: {
              slug: productSlug,
            },
          });
        if (
          !originalReviewsQuery ||
          !result.data?.review ||
          !originalReviewsQuery.product?.reviews
        ) {
          return;
        }

        const newReviewsQuery = {
          ...originalReviewsQuery,
          product: {
            ...originalReviewsQuery.product,
          },
          reviews: [
            ...originalReviewsQuery.product.reviews,
            result.data.review,
          ],
        };

        cache.writeQuery({
          query: GetReviewsForProductsSlugDocument,
          variables: {
            slug: productSlug,
          },
          data: newReviewsQuery,
        });
      },
    });
  return { createReview };
};
