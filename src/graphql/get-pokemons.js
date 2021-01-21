  
import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
{
    pokemons(first: 6) {
      id
      number
      name,
      image,
      maxHP, 
      maxCP,
      evolutions {
        id,
        number,
        name,
        image
      }
    }
  }
`