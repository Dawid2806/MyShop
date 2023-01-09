import React, { useState } from "react";
import { ProductReviewList } from "./ProductReviewList";
import { ProductReviewForm } from "./ProductReviewForm";
interface ProductReviewContainerProps {
  productSlug: string;
}
export const ProductReviewContainer = ({
  productSlug,
}: ProductReviewContainerProps) => {
  const [active, setActive] = useState(true);
  const activeHandler = () => {
    setActive(!active);
  };
  return (
    <div>
      <div className="flex justify-center ">
        <span
          onClick={activeHandler}
          className={
            active
              ? "font-bold pointer-events-none"
              : "text-gray-400  cursor-pointer "
          }
        >
          Show Review
        </span>
        <span className="mx-5">|</span>
        <span
          onClick={activeHandler}
          className={
            !active
              ? "font-bold  pointer-events-none"
              : "text-gray-400 cursor-pointer 	"
          }
        >
          Add Review
        </span>
      </div>
      {active && <ProductReviewList productSlug={productSlug} />}
      {!active && <ProductReviewForm productSlug={productSlug} />}
    </div>
  );
};
