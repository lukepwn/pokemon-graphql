import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/PokemonInfo';

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS);
  //const { data } = useQuery(GET_POKEMONS);

  return (
    <div className="container">
      
      {/* {pokemons.map(pokemon => JSON.stringify(pokemon))} */}
      {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}

{/*  */}