import { combineReducers } from 'redux';
import counterReducer from '../features/pages/counter/counterSlice';

import backendAPIReducer from './backendAPI/backendAPI.reducer';
import addTestCollection1Reducer from './reducers/TestCollection1/addTestCollection1Reducer';
import deleteTestCollection1Reducer from './reducers/TestCollection1/deleteTestCollection1Reducer';
import testCollection1Reducer from './reducers/TestCollection1/testCollection1Reducer';

const rootReducer = combineReducers({
  testCollection1: testCollection1Reducer,
  addTestCollection1: addTestCollection1Reducer,
  deleteTestCollection1: deleteTestCollection1Reducer,
  backendAPI: backendAPIReducer,
  counter: counterReducer
});

export default rootReducer;
