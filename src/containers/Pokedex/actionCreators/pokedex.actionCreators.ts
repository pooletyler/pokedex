import { ISetAnyAction, ISetNumberAction } from '../../../types/actions';
import { NamedAPIResource, Pokemon } from '../../../types/pokeapi';
import {
  SET_NUMBER_OF_POKEMON,
  SET_OFFSET,
  SET_POKEDEX_STATE,
  SET_POKEMON_LIST,
} from '../actionTypes/pokedex.actionTypes';
import RoutesReducerState from '../classes/PokedexReducerState';

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

export const setPokedexState = (state: RoutesReducerState): ISetAnyAction => {
  return { type: SET_POKEDEX_STATE, payload: state };
};
