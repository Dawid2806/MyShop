import React from "react";

export const CollectionTitle = (props: {
  category:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  CategoryDescription:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className="flex items-center rounded bg-gray-100 p-8">
      <div className="mx-auto text-center lg:text-left">
        <h2 className="text-2xl font-bold">{props.category}</h2>

        <p className="mt-4 max-w-[45ch] text-sm text-gray-700">
          {props.CategoryDescription}
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
