import Image from "next/image";
import React from "react";

interface itemInCheckoutProps {
  name: string;
  image: string;
  count: number;
}

export const ItemInCheckout = ({ name, image, count }: itemInCheckoutProps) => {
  return (
    <li className="flex items-center py-4">
      <Image
        width={64}
        height={64}
        src={image}
        alt={name}
        className="object-cover rounded"
      />

      <div className="ml-4">
        <h3 className="text-sm text-gray-900">{name}</h3>
        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Qty:{count} </dt>
          </div>
        </dl>
      </div>
    </li>
  );
};
