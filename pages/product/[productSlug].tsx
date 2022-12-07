import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { apolloClient } from "../../graphql/apolloClient";
import {
  GetProductDebailsBySlugDocument,
  GetProductDebailsBySlugQuery,
  GetProductDebailsBySlugQueryVariables,
  GetProductSlugDocument,
  GetProductSlugQuery,
} from "../../src/gql/graphql";

const ProductsDetailsPage = ({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();
  console.log(router);
  return <div>index z products{data}</div>;
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductSlugQuery>({
    query: GetProductSlugDocument,
  });

  return {
    paths: data.categories.map((category) => {
      return category.products.map((product) => {
        return {
          params: {
            productSlug: product.slug.toString(),
          },
        };
      });
    }),
    fallback: false,
  };
};
type Params = {
  params: {
    productSlug: string;
  };
};
export const getStaticProps = async ({ params }: Params) => {
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
      data: { ...data.product },
    },
  };
};

export default ProductsDetailsPage;
