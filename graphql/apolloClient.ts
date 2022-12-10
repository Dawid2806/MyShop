import { ApolloClient, InMemoryCache } from "@apollo/client";
export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbgruo030m4a01uf9mfdb622/master",
  cache: new InMemoryCache(),
});
