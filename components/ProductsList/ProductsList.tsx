import React from "react";
import { ProductsListItem } from "./ProductsListItem";

interface ProductsListProps {
  items: Array<{
    __typename?: "Product";
    id: string;
    name?: string;
    price?: number;
    slug?: string;
    image?: {
      __typename?: "Asset";
      url: string;
    };
  }>;
}

export const ProductsList = (props: ProductsListProps) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {props.items.map((item) => {
            return (
              <ProductsListItem
                key={item.id}
                slug={item.slug}
                id={item.id}
                name={item.name}
                price={item.price}
                imageSrc={item.image?.url}
                imageAlt={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
