import { MutableRefObject } from 'react';
import { Dispatch } from 'redux';
import {
  NamedAPIResource,
  NamedAPIResourceList,
  Pokemon,
} from '../../../types/pokeapi';

export const getNumberOfPokemon = (
  dispatch: Dispatch<any>,
  url: string,
  getData,
  setNumberOfPokemon
) => {
  getData(`${url}pokemon/?limit=1`).then((response: NamedAPIResourceList) => {
    dispatch(setNumberOfPokemon(response.count));
  });
};

export const getAllPokemon = (
  dispatch: Dispatch<any>,
  url: string,
  limit: number,
  getData,
  setPokemonList,
  setOffset
) => {
  if (limit > 0) {
    getData(`${url}pokemon/?limit=${limit}`).then(
      (response: NamedAPIResourceList) => {
        dispatch(setPokemonList(response.results));
        dispatch(setOffset(0));
      }
    );
  }
};

export const updatePokemonInList = async (
  dispatch: Dispatch<any>,
  Promise: PromiseConstructor,
  slice: { lower: number; upper: number },
  pokemonList: (NamedAPIResource | Pokemon)[],
  getData,
  setPokemonList
) => {
  Promise.all(
    pokemonList
      .slice(slice.lower, slice.upper)
      .map((pokemon: NamedAPIResource | Pokemon) => {
        if (pokemon.url) {
          return getData(pokemon.url).then((response: Pokemon) => {
            return response;
          });
        }
        return pokemon;
      })
  ).then((updatedPokemonSlice: Pokemon[]) => {
    const updatedPokemonList = [...pokemonList];
    updatedPokemonList.splice(slice.lower, slice.upper, ...updatedPokemonSlice);

    dispatch(setPokemonList(updatedPokemonList));
  });
};

export const loadMorePokemonCards = (
  dispatch: Dispatch<any>,
  pokemonCardsContainerRef: MutableRefObject<any>,
  offset: number,
  setOffset
) => {
  console.log('running');
  if (
    pokemonCardsContainerRef.current.scrollHeight -
      pokemonCardsContainerRef.current.scrollTop ===
    pokemonCardsContainerRef.current.clientHeight
  ) {
    console.log('hey')
    dispatch(setOffset(offset + 20));
  }
};
