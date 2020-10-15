import { NamedAPIResource, Pokemon } from '../../../types/pokeapi';

class PokedexReducerState {
  numberOfPokemon?: number;

  pokemonList?: (NamedAPIResource | Pokemon)[];

  offset?: number;

  constructor(
    numberOfPokemon?: number,
    pokemonList?: (NamedAPIResource | Pokemon)[],
    offset?: number
  ) {
    this.numberOfPokemon = numberOfPokemon || 0;
    this.pokemonList = pokemonList || [];
    this.offset = offset || undefined;
  }
}

export default PokedexReducerState;
