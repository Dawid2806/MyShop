import React from "react";
import { itemsProps } from "../../typs";

import { CollectionItem } from "./CollectionItem";
import { CollectionTitle } from "./CollectionTitle";

interface ProductsCollectionsListProps {
  data: {
    category: string;
    categoryDescription: string;
    items: itemsProps[];
  };
}

export const Collection = ({ data }: ProductsCollectionsListProps) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <h3 className="mb-8 text-center text-bold text-2xl a">
          Check out our collection
          <span className="ml-4 text-violet-400">
            {data.category.toUpperCase()}
          </span>
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          <CollectionTitle
            category={data.category}
            categoryDescription={data.categoryDescription}
          />
          <CollectionItem items={data.items} />
        </div>
      </div>
    </section>
  );
};
