import React, { FC, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getCookie from '../../utils/getCookie';
import setCookie from '../../utils/setCookie';
import SearchBar from '../../components/SearchBar/SearchBar';
import getData from '../../utils/getData';
import POKE_API_BASE_URL from '../../constants/constants';
import {
  getAllPokemon,
  getNumberOfPokemon,
  loadMorePokemonCards,
  updatePokemonInList,
  updateRecentSearches,
} from './actions/pokedex.actions';
import {
  setLoading,
  setNumberOfPokemon,
  setOffset,
  setPokemonList,
  setRecentSearches,
  setsearchInputValue,
  setSearchString,
} from './actionCreators/pokedex.actionCreators';
import {
  NamedAPIResource,
  Pokemon,
  PokemonAbility,
  PokemonForm,
  PokemonMove,
  PokemonType,
} from '../../types/pokeapi';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Loading from '../../components/Loading/Loading';
import './Pokedex.scss';

const Pokedex: FC<any> = () => {
  const {
    loading,
    numberOfPokemon,
    pokemonList,
    offset,
    searchInputValue,
    searchString,
    recentSearches,
  } = useSelector((selectors: any) => selectors.pokedex);
  const dispatch = useDispatch();

  const pokemonCardsContainerRef = useRef(null);

  const handleOnScroll = () => {
    loadMorePokemonCards(dispatch, pokemonCardsContainerRef, offset, setOffset);
  };

  useEffect(() => {
    updateRecentSearches(
      dispatch,
      searchString,
      getCookie,
      setCookie,
      setRecentSearches
    );
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
    updateRecentSearches(
      dispatch,
      searchString,
      getCookie,
      setCookie,
      setRecentSearches
    );
  }, [searchString]);

  useEffect(() => {
    dispatch(setLoading(true));
    updatePokemonInList(
      dispatch,
      Promise,
      { lower: offset, upper: offset + 20 },
      pokemonList,
      searchString,
      getData,
      setPokemonList,
      setLoading
    );
  }, [offset, searchString]);

  const handleSearchClick = (newSearchString) => {
    pokemonCardsContainerRef.current.scrollTo(0, 0);
    dispatch(setOffset(0));
    dispatch(setSearchString(newSearchString));
  };

  const handleSearchChange = (newSearchInputValue: string) => {
    dispatch(setsearchInputValue(newSearchInputValue));
  };

  return (
    <>
      <div className="Pokedex-header" />
      <div className="Pokedex-heroBanner">
        <div className="Pokedex-heroBannerTitle">
          Who&apos;s That
          <br />
          Pokemon?!
          <div className="Pokedex-searchBarContainer">
            <SearchBar
              inputValue={searchInputValue}
              recentSearches={recentSearches}
              onClick={handleSearchClick}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      {loading && (
        <div className="Pokedex-loader">
          <Loading />
        </div>
      )}
      <div
        className="Pokedex-pokemonCardContainer"
        ref={pokemonCardsContainerRef}
        onScroll={handleOnScroll}
      >
        {pokemonList
          .filter((pokemon: NamedAPIResource | Pokemon) => {
            return (
              pokemon &&
              pokemon.name.toLowerCase().includes(searchString.toLowerCase())
            );
          })
          .slice(0, offset + 20)
          .map((pokemon: Pokemon) => {
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
                abilities={
                  pokemon.abilities &&
                  pokemon.abilities.map((ability: PokemonAbility) => {
                    return ability.ability.name;
                  })
                }
                moves={
                  pokemon.moves &&
                  pokemon.moves.map((move: PokemonMove) => {
                    return move.move.name;
                  })
                }
                varieties={
                  pokemon.forms &&
                  pokemon.forms.map((form: PokemonForm) => {
                    return form.name;
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
