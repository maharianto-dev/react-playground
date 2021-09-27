import { combineReducers } from 'redux';
import counterReducer from '../features/counter/counterSlice';

import testCollection1Reducer from './testCollection1/testCollection1.reducer';

const rootReducer = combineReducers({
  testCollection1API: testCollection1Reducer,
  counter: counterReducer
});

export default rootReducer;
