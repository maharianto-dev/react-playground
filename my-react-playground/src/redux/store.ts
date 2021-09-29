import { Action } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk, { ThunkAction } from 'redux-thunk';

import rootReducer from './rootReducer';

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
