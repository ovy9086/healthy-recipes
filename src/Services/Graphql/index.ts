import { ApolloClient, InMemoryCache } from '@apollo/client';
export const apolloClient = new ApolloClient({
  uri: 'https://ddapi.prod.dietdoctor.com/v1/',
  cache: new InMemoryCache()
});
