import React from "react";
import { dummyProps, itemsProps } from "../../typs";
import { CollectionItem } from "./CollectionItem";
import { CollectionTitle } from "./CollectionTitle";

export const Collection = (props: dummyProps) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <h3 className="mb-8 text-center text-bold text-2xl a">
          Check out our collection
          <span className="ml-4 text-violet-400">
            {props.category?.toUpperCase()}
          </span>
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          <CollectionTitle
            category={props.category}
            categoryDescription={props.categoryDescription}
          />
          <CollectionItem items={props.items} />
        </div>
      </div>
    </section>
  );
};
