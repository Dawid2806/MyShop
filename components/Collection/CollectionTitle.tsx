import Link from "next/link";
import React from "react";
interface ProductsCollectionsListProps {
  category: string | null | undefined;
  categoryDescription: string | null | undefined;
  slug: string;
}
export const CollectionTitle = (props: ProductsCollectionsListProps) => {
  return (
    <div className="flex items-center rounded bg-gray-100 p-8">
      <div className="mx-auto text-center lg:text-left">
        <h2 className="text-2xl font-bold">{props.category?.toUpperCase()}</h2>

        <p className="mt-4 max-w-[45ch] text-sm text-gray-700">
          {props.categoryDescription}
        </p>

        <Link href={props.slug}>
          <a className="mt-6 inline-block rounded bg-black px-6 py-3 text-sm text-white">
            View the Range
          </a>
        </Link>
      </div>
    </div>
  );
};
