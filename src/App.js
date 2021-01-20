import logo from "./logo.svg";
import "./App.css";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_POKEMON_INFO = gql`
  {
    query pokemons(first: 150) {
      id
      number
      name
      image
      evolutions {
        id
        number
        name
        image
      }
    }
  }
`;

function App() {
  <>
    <h1>hi</h1>
  </>
}

export default App;
