import { createStore } from '@reduxjs/toolkit';
import { gameStateReducer } from '../reducers/gameStateReducer';

const store = createStore(gameStateReducer);

export default store;