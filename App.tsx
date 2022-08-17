import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigationRouter from './src/Navigation';
import { apolloClient } from './src/Services/Graphql';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationRouter />
      </GestureHandlerRootView>
    </ApolloProvider>
  );
};

export default App;
