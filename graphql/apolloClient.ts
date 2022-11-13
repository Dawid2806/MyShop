import { ApolloClient, InMemoryCache } from "@apollo/client";
export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cla5avw7645jq01ukfnkaased/master",
  cache: new InMemoryCache(),
});
