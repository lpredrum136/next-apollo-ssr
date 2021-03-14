// lib/apolloClient.js
import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let apolloClient;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // set to true for SSR
    link: new HttpLink({
      uri: 'https://green-sky.ap-south-1.aws.cloud.dgraph.io/graphql',
    }),
    cache: new InMemoryCache(),
  });
};

export const initialiseApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();
};
