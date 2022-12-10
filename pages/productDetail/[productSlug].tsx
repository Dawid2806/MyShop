import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { ProductDetails } from "../../components/ProductsDetails/ProductDetails";
import { apolloClient } from "../../graphql/apolloClient";
import {
  GetProductDebailsBySlugDocument,
  GetProductDebailsBySlugQuery,
  GetProductDebailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "../../src/gql/graphql";
import { InferGetStaticPaths } from "../../typs";

const ProductsDetailsPage = ({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  if (!data) {
    return;
  }
  return (
    <ProductDetails
      ProductProps={{
        id: data?.id,
        name: data?.name,
        price: data?.price,
        image: data?.images[0].url,
        description: data?.description,
        slug: data.slug,
      }}
    />
  );
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productSlug: product.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params || !params.productSlug) {
    return {
      props: {},
    };
  }
  const { data } = await apolloClient.query<
    GetProductDebailsBySlugQuery,
    GetProductDebailsBySlugQueryVariables
  >({
    variables: {
      slug: params.productSlug.toString(),
    },
    query: GetProductDebailsBySlugDocument,
  });

  return {
    props: {
      data: data.product,
    },
  };
};

export default ProductsDetailsPage;
