import React from "react";
import { dummyProps, itemsProps } from "../../typs";

export const CollectionTitle: React.FC<dummyProps> = (props) => {
  return (
    <div className="flex items-center rounded bg-gray-100 p-8">
      <div className="mx-auto text-center lg:text-left">
        <h2 className="text-2xl font-bold">{props.category?.toUpperCase()}</h2>

        <p className="mt-4 max-w-[45ch] text-sm text-gray-700">
          {props.categoryDescription}
        </p>

        <a
          href="#"
          className="mt-6 inline-block rounded bg-black px-6 py-3 text-sm text-white"
        >
          View the Range
        </a>
      </div>
    </div>
  );
};
