import logo from "./logo.svg";
import "./App.css";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 150) {
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
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <>
      <h1>Pokemons</h1>
      <p>
        <a href="https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon">Wiki</a>
        Catch 'em all
      </p>
      <div className="container">
        {data &&
          data.pokemons &&
          data.pokemons.map((pokemon, index) => (
            <div key={index} className="card">
              <img src={pokemon.image} />
              <div class="card-body">
                <h3>{pokemon.name}</h3>
                <p>
                  {pokemon.evolutions && pokemon.evolutions.length !== 0 && (
                    <p>
                      {" "}
                      Evolutions:
                      {pokemon.evolutions.map((e, indx) => {
                        return <p key={indx}> {e.name} </p>;
                      })}
                    </p>
                  )}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;