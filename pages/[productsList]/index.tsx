import { InferGetServerSidePropsType } from "next";
import React from "react";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { apolloClient } from "../../graphql/apolloClient";
import {
  GetAllProductsInCurrenCategoryDocument,
  GetAllProductsInCurrenCategoryQuery,
  GetAllProductsInCurrenCategoryQueryVariables,
} from "../../src/gql/graphql";
import { InferGetStaticPaths } from "../../typs";

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
  const myParams: string[] = [
    "watch",
    "t-shirts",
    "shoes",
    "hoodies",
    "accessories",
  ];
  const paths = myParams.map((el) => {
    return {
      params: {
        productsList: el,
      },
    };
  });
  return {
    paths,
    fallback: false,
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
