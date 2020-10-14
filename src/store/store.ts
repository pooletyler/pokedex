import { createStore } from 'redux';
import reducer from './combinedReducer';

const store = createStore(reducer);

export default store;
