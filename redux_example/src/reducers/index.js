// src/reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer, // Adding the counter reducer
});

export default rootReducer;
