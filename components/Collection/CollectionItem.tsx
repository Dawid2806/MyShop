import Link from "next/link";
import { itemsProps } from "../../typs";
import { Item } from "./Collection";

export interface collectionItemProps {
  items: Item[];
}

export const CollectionItem = (props: collectionItemProps) => {
  if (!props.items) {
    return null;
  }
  const item = props.items.map((item) => {
    return item;
  });
  return (
    <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
      {item.map((item, index) => {
        if (index < 3) {
          return (
            <Link key={item.id} href={"#"}>
              <a className="block">
                <picture>
                  <img
                    alt={item.name}
                    src={item.image?.url}
                    className="aspect-square w-full rounded object-cover"
                  />
                </picture>

                <div className="mt-2">
                  <h5 className="font-medium">{item.name}</h5>

                  <p className="mt-1 text-sm text-gray-700">${item.price}</p>
                </div>
              </a>
            </Link>
          );
        }
      })}
    </div>
  );
};
