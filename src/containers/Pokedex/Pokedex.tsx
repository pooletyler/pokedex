import React, { FC, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from 'src/components/SearchBar/SearchBar';
import getData from '../../utils/getData';
import POKE_API_BASE_URL from '../../constants/constants';
import {
  getAllPokemon,
  getNumberOfPokemon,
  loadMorePokemonCards,
  updatePokemonInList,
} from './actions/pokedex.actions';
import {
  setNumberOfPokemon,
  setOffset,
  setPokemonList,
} from './actionCreators/pokedex.actionCreators';
import { Pokemon, PokemonType } from '../../types/pokeapi';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Loading from '../../components/Loading/Loading';
import './Pokedex.scss';

const Pokedex: FC<any> = () => {
  const { numberOfPokemon, pokemonList, offset } = useSelector(
    (selectors: any) => selectors.pokedex
  );
  const dispatch = useDispatch();

  const pokemonCardsContainerRef = useRef(null);

  const handleOnScroll = () => {
    loadMorePokemonCards(dispatch, pokemonCardsContainerRef, offset, setOffset);
  };

  useEffect(() => {
    getNumberOfPokemon(
      dispatch,
      POKE_API_BASE_URL,
      getData,
      setNumberOfPokemon
    );
  }, []);

  useEffect(() => {
    getAllPokemon(
      dispatch,
      POKE_API_BASE_URL,
      numberOfPokemon,
      getData,
      setPokemonList,
      setOffset
    );
  }, [numberOfPokemon]);

  useEffect(() => {
    updatePokemonInList(
      dispatch,
      Promise,
      { lower: offset, upper: offset + 20 },
      pokemonList,
      getData,
      setPokemonList
    );
  }, [offset]);

  return (
    <>
      <div className="Pokedex-header" />
      <div className="Pokedex-heroBanner">
        <div className="Pokedex-heroBannerTitle">
          Who&apos;s That Pokemon?!
          <div className="Pokedex-searchBarContainer">
            <SearchBar />
          </div>
        </div>
      </div>
      {(!pokemonList[offset] || pokemonList[offset].url) && (
        <div className="Pokedex-loader">
          <Loading />
        </div>
      )}
      <div
        className="Pokedex-pokemonCardContainer"
        ref={pokemonCardsContainerRef}
        onScroll={handleOnScroll}
      >
        {pokemonList.slice(0, offset + 20).map((pokemon: Pokemon) => {
          return (
            <PokemonCard
              name={pokemon.name && pokemon.name}
              id={pokemon.id && pokemon.id}
              image={pokemon.sprites && pokemon.sprites.front_default}
              types={
                pokemon.types &&
                pokemon.types.map((type: PokemonType) => {
                  return type.type.name;
                })
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default Pokedex;
