import React from "react";
import { useCreateProductReviewMutation } from "../../src/generated/graphql";

const Index = () => {
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
    </div>
  );
};

export default Index;
