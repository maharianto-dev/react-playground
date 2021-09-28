import { combineReducers } from 'redux';
import counterReducer from '../features/counter/counterSlice';

import backendAPIReducer from './backendAPI/backendAPI.reducer';

const rootReducer = combineReducers({
  backendAPI: backendAPIReducer,
  counter: counterReducer
});

export default rootReducer;
