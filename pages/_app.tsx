import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "./../next-seo.config";
import { ApolloProvider } from "@apollo/client";

import { Layout } from "../components/Layout/Layout";
import { apolloClient } from "../graphql/apolloClient";
import { CartStateContextProvider } from "../context/cartContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CartStateContextProvider >

      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
      </CartStateContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
