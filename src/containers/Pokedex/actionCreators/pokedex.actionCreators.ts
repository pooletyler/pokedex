import {
  ISetAnyAction,
  ISetBooleanAction,
  ISetNumberAction,
  ISetStringAction,
} from '../../../types/actions';
import { NamedAPIResource, Pokemon } from '../../../types/pokeapi';
import {
  SET_LOADING,
  SET_NUMBER_OF_POKEMON,
  SET_OFFSET,
  SET_POKEDEX_STATE,
  SET_POKEMON_LIST,
  SET_RECENT_SEARCHES,
  SET_SEARCH_INPUT_VALUE,
  SET_SEARCH_STRING,
} from '../actionTypes/pokedex.actionTypes';
import RoutesReducerState from '../classes/PokedexReducerState';

export const setLoading = (loading: boolean): ISetBooleanAction => {
  return { type: SET_LOADING, payload: loading };
};

export const setNumberOfPokemon = (
  numberOfPokemon: number
): ISetNumberAction => {
  return { type: SET_NUMBER_OF_POKEMON, payload: numberOfPokemon };
};

export const setPokemonList = (
  pokemonList: (NamedAPIResource | Pokemon)[]
): ISetAnyAction => {
  return { type: SET_POKEMON_LIST, payload: pokemonList };
};

export const setOffset = (offset: number): ISetNumberAction => {
  return { type: SET_OFFSET, payload: offset };
};

export const setsearchInputValue = (
  searchInputValue: string
): ISetStringAction => {
  return { type: SET_SEARCH_INPUT_VALUE, payload: searchInputValue };
};

export const setSearchString = (searchString: string): ISetStringAction => {
  return { type: SET_SEARCH_STRING, payload: searchString };
};

export const setRecentSearches = (recentSearches: string[]): ISetAnyAction => {
  return { type: SET_RECENT_SEARCHES, payload: recentSearches };
};

export const setPokedexState = (state: RoutesReducerState): ISetAnyAction => {
  return { type: SET_POKEDEX_STATE, payload: state };
};
