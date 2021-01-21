  
import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
{
    pokemons(first: 151) {
      id
      number
      name,
      image,
      evolutions {
        id,
        number,
        name,
        image
      }
    }
  }
`