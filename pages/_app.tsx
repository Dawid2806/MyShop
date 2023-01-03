import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "./../next-seo.config";
import { ApolloProvider } from "@apollo/client";

import { Layout } from "../components/Layout/Layout";
import { apolloClient } from "../graphql/apolloClient";
import { CartStateContextProvider } from "../context/cartContext";
import { QueryClient, QueryClientProvider } from "react-query";
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <CartStateContextProvider>
          <Layout>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </Layout>
        </CartStateContextProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default MyApp;
