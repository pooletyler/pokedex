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
  searchString: string,
  getData,
  setPokemonList,
  setLoading
) => {
  Promise.all(
    pokemonList
      .filter((pokemon: NamedAPIResource | Pokemon) => {
        return (
          pokemon &&
          pokemon.name.toLowerCase().includes(searchString.toLowerCase())
        );
      })
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

    updatedPokemonSlice.forEach((pokemon: Pokemon) => {
      updatedPokemonList[pokemon.id - 1] = pokemon;
    });

    dispatch(setPokemonList(updatedPokemonList));
    dispatch(setLoading(false));
  });
};

export const loadMorePokemonCards = (
  dispatch: Dispatch<any>,
  pokemonCardsContainerRef: MutableRefObject<any>,
  offset: number,
  setOffset
) => {
  if (
    pokemonCardsContainerRef.current.scrollHeight -
      pokemonCardsContainerRef.current.scrollTop ===
    pokemonCardsContainerRef.current.clientHeight
  ) {
    dispatch(setOffset(offset + 20));
  }
};

export const updateRecentSearches = (
  dispatch: Dispatch<any>,
  searchString: string,
  getCookie,
  setCookie,
  setRecentSearches
) => {
  const recentSearches =
    (getCookie('recentSearches') && JSON.parse(getCookie('recentSearches'))) ||
    [];

  if (searchString !== '') {
    recentSearches.push(searchString);
  }
  if (recentSearches.length > 10) {
    recentSearches.shift();
  }

  setCookie('recentSearches', JSON.stringify(recentSearches), 10);
  dispatch(setRecentSearches(recentSearches));
};
