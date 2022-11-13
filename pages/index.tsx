import { Banner } from "../components/Banners/BannerBig";
import { Collection } from "../components/Collection/Collection";

import { GetCategoryDocument, GetCategoryQuery } from "../src/gql/graphql";
import { apolloClient } from "../graphql/apolloClient";
import { InferGetStaticPropsType } from "next";

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data.categories);
  return (
    <>
      <Banner />
      {data.categories.map((el) => {
        return (
          <Collection
            key={el.__typename}
            data={el.products.map((item) => {
              return {
                category: item.name,
                categoryDescription: item.name,
                items: item.products,
              };
            })}
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
