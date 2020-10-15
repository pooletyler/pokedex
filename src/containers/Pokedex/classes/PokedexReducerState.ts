import { NamedAPIResource, Pokemon } from '../../../types/pokeapi';

class PokedexReducerState {
  loading?: boolean;

  numberOfPokemon?: number;

  pokemonList?: (NamedAPIResource | Pokemon)[];

  offset?: number;

  searchInputValue?: string;

  searchString?: string;

  recentSearches?: string[];

  constructor(
    loading?: boolean,
    numberOfPokemon?: number,
    pokemonList?: (NamedAPIResource | Pokemon)[],
    offset?: number,
    searchInputValue?: string,
    searchString?: string,
    recentSearches?: string[]
  ) {
    this.loading = loading || true;
    this.numberOfPokemon = numberOfPokemon || 0;
    this.pokemonList = pokemonList || [];
    this.offset = offset || undefined;
    this.searchInputValue = searchInputValue || '';
    this.searchString = searchString || '';
    this.recentSearches = recentSearches || [];
  }
}

export default PokedexReducerState;
