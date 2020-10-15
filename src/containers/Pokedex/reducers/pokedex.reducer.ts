import PokedexReducerState from '../classes/PokedexReducerState';
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

const initialState = new PokedexReducerState();

const PokedexReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_NUMBER_OF_POKEMON:
      return { ...state, numberOfPokemon: action.payload };
    case SET_POKEMON_LIST:
      return { ...state, pokemonList: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_SEARCH_INPUT_VALUE:
      return { ...state, searchInputValue: action.payload };
    case SET_SEARCH_STRING:
      return { ...state, searchString: action.payload };
    case SET_RECENT_SEARCHES:
      return { ...state, recentSearches: action.payload };
    case SET_POKEDEX_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default PokedexReducer;
