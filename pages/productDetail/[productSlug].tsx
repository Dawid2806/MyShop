import { InferGetServerSidePropsType } from "next";
import React from "react";
import { ProductDetails } from "../../components/ProductsDetails/ProductDetails";
import { apolloClient } from "../../graphql/apolloClient";

import { InferGetStaticPaths } from "../../typs";
import { serialize } from "next-mdx-remote/serialize";
import {
  GetProductDebailsBySlugDocument,
  GetProductDebailsBySlugQuery,
  GetProductDebailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "../../src/generated/graphql";
const ProductsDetailsPage = ({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  if (!data?.product) {
    return;
  }
  return (
    <ProductDetails
      ProductProps={{
        id: data.product.id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        description: data.longDescription,
        slug: data.product.slug,
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
    fallback: "blocking",
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
  if (!data || !data.product) {
    return {
      props: {},
      notFound: true,
    };
  }
  return {
    props: {
      data: {
        ...data,
        longDescription: await serialize(data.product.description),
      },
    },
  };
};

export default ProductsDetailsPage;
