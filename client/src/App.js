import React from 'react';
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";
import Home from "./Home";
import Input from "./input";

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Home />
        <Input />
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App;
