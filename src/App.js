import "./App.css";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonsContainer } from "./containers/PokemonsContainer";

function App() {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: 'https://pokemon-graphql.vercel.app/'
  })

  const client = new ApolloClient({
    cache,
    link
  })
  
  return (
  <ApolloProvider client = {client}>
    <PokemonsContainer />
  </ApolloProvider>
  );
}

export default App;
