import ApolloClient, { InMemoryCache } from 'apollo-boost';
// import { LAMBDA_SERVER_ROUTE } from 'react-native-dotenv';

const GRAPHQL_ENDPOINT = 'http://localhost:3000/graphql';
// const GRAPHQL_ENDPOINT = LAMBDA_SERVER_ROUTE;

const cache = new InMemoryCache({
  dataIdFromObject: o => o.id || null,
});

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache,
});

export default client;
