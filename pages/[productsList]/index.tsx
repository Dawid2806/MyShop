import { InferGetServerSidePropsType } from "next";
import React from "react";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { apolloClient } from "../../graphql/apolloClient";

import { InferGetStaticPaths } from "../../typs";
import {
  GetAllProductsInCurrenCategoryDocument,
  GetAllProductsInCurrenCategoryQuery,
  GetAllProductsInCurrenCategoryQueryVariables,
  GetCategoryDocument,
  GetCategoryQuery,
} from "../../src/generated/graphql";

const ProductsListPage = ({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>coś poszło nie tak</div>;
  }
  return (
    <>
      <div>
        <ProductsList items={data[0].products} />
      </div>
    </>
  );
};

export default ProductsListPage;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetCategoryQuery>({
    query: GetCategoryDocument,
  });

  return {
    paths: data.categories.map((category) => {
      return {
        params: {
          productsList: category.slug,
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productsList) {
    return {
      props: {},
    };
  }
  const { data } = await apolloClient.query<
    GetAllProductsInCurrenCategoryQuery,
    GetAllProductsInCurrenCategoryQueryVariables
  >({
    variables: {
      slug: params?.productsList.toString(),
    },
    query: GetAllProductsInCurrenCategoryDocument,
  });

  return {
    props: {
      data: data.categories,
    },
  };
};
