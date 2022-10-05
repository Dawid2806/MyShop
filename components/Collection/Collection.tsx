import React from "react";
import { CollectionItem } from "./CollectionItem";
import { CollectionTitle } from "./CollectionTitle";

export const Collection = (props: {
  sectionTitle:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  sectionDescription:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  sectionItems: { id: any; title: any; foto: any; price: any }[];
}) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          <CollectionTitle
            category={props.sectionTitle}
            CategoryDescription={props.sectionDescription}
          />
          <CollectionItem sectionItems={props.sectionItems} />
        </div>
      </div>
    </section>
  );
};
