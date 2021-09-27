import { createSelector } from 'reselect';

const selectTestCollection1API = (state: { testCollection1API: any }) => state.testCollection1API;

export const selectTestCollection1List = createSelector(
  [selectTestCollection1API],
  (testCollection1API) => testCollection1API.testCollection1List
);

export const selectIsTestCollection1ListFetching = createSelector(
  [selectTestCollection1API],
  (testCollection1API) => testCollection1API.isFetching
);
