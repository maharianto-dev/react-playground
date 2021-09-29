import { combineReducers } from 'redux';
import counterReducer from '../features/counter/counterSlice';

import backendAPIReducer from './backendAPI/backendAPI.reducer';
import addTestCollection1Reducer from './reducers/addTestCollection1Reducer';
import testCollection1Reducer from './reducers/testCollection1Reducer';

const rootReducer = combineReducers({
  testCollection1: testCollection1Reducer,
  addTestCollection1: addTestCollection1Reducer,
  backendAPI: backendAPIReducer,
  counter: counterReducer
});

export default rootReducer;
