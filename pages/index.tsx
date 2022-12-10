import { Banner } from "../components/Banners/BannerBig";
import { Collection } from "../components/Collection/Collection";

import { GetCategoryDocument, GetCategoryQuery } from "../src/gql/graphql";
import { apolloClient } from "../graphql/apolloClient";
import { InferGetStaticPropsType } from "next";

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Banner />
      {data.categories.map((collection) => {
        return (
          <Collection
            key={collection.id}
            category={collection.name}
            categoryDescription={collection.description}
            items={collection.products}
          />
        );
      })}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetCategoryQuery>({
    query: GetCategoryDocument,
  });
  return {
    props: {
      data,
    },
  };
};
