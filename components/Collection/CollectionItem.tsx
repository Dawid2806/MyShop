import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";
import { itemsProps } from "../../typs";

interface collectionItemProps {
  items: itemsProps[] | undefined;
}

export const CollectionItem = (props: collectionItemProps) => {
  const url = props.items?.map((item) => {
    return item.image;
  });

  return (
    <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
      {props.items?.map((item, index) => {
        if (index < 3) {
          return (
            <Link key={item.key} href={"#"}>
              <a className="block">
                <picture>
                  <img
                    alt={item.title}
                    src={item.image}
                    className="aspect-square w-full rounded object-cover"
                  />
                </picture>

                <div className="mt-2">
                  <h5 className="font-medium">{item.title}</h5>

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
