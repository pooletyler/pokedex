import { combineReducers } from 'redux';
import PokedexReducer from '../containers/Pokedex/reducers/pokedex.reducer';

export default combineReducers({
  pokedex: PokedexReducer,
});
