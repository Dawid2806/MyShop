import Link from "next/link";
import React from "react";
import { dummyData } from "../../typs";
export const CollectionItem = (props: {
  sectionItems: { id: any; title: any; foto: any; price: any }[];
}) => {
  const Item = (props: {
    alt: string | undefined;
    foto: string | undefined;
    title:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    price:
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
      <>
        <Link href={"#"}>
          <a className="block">
            <img
              alt={props.alt}
              src={props.foto}
              className="aspect-square w-full rounded object-cover"
            />

            <div className="mt-2">
              <h5 className="font-medium">{props.title}</h5>

              <p className="mt-1 text-sm text-gray-700">${props.price}</p>
            </div>
          </a>
        </Link>
      </>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
      {props.sectionItems.map(
        (item: { id: any; title: any; foto: any; price: any }) => {
          return (
            <Item
              key={item.id}
              title={item.title}
              foto={item.foto}
              alt={item.title}
              price={item.price}
            />
          );
        }
      )}
    </div>
  );
};
