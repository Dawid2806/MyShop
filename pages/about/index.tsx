import React from "react";
import { useCreateProductReviewMutation } from "../../src/generated/graphql";

const index = () => {
  const [createReview, { data, loading, error }] =
    useCreateProductReviewMutation();
  const addReview = () => {
    createReview({
      variables: {
        review: {
          headline: "Clientz hooksa",
          name: "David Koperfield",
          email: "davidexample@gmail.com",
          content: "Very good material, I like to walk in it.",
          rating: 5,
        },
      },
    });
  };

  return (
    <div>
      <button onClick={addReview} type="button">
        Add review
      </button>
      <pre>{JSON.stringify(data, 2, null)}</pre>
    </div>
  );
};

export default index;
