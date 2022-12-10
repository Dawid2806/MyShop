import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCartState } from "../../hooks/useContext";

interface ProductsListItemProps {
  id: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  price: number;
}

export const ProductsListItem = ({
  id,
  imageSrc,
  imageAlt,
  name,
  price,
  slug,
}: ProductsListItemProps) => {
  const cartState = useCartState();

  return (
    <div key={id} className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <Image
          layout="fill"
          src={`${imageSrc}`}
          alt={`${imageAlt}`}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/productDetail/${slug}`}>
              <a>{name}</a>
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}$</p>
      </div>
      <div className="flex my-4">
        <button
          onClick={() => {
            cartState.addItemToCart({
              id: String(id),
              price: Number(price),
              title: String(name),
              count: 1,
              image: String(imageSrc),
              totalAmount: 0,
            });
          }}
          className="m-auto  bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-xl"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
