/* eslint-disable max-len */
import { TestCollection1ActionTypes } from './testCollection1.types';

const INITIAL_STATE = {
  testCollection1List: [],
  isFetching: false,
  errorMessage: undefined,
};

export function testCollection1Reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case TestCollection1ActionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case TestCollection1ActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        testCollection1List: action.payload,
        isFetching: false,
      };
    case TestCollection1ActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export const getTestCollection1List = (state: { testCollection1List: any; }) => state.testCollection1List;
export const getTestCollection1ListPending = (state: { isFetching: boolean; }) => state.isFetching;
export const getTestCollection1ListError = (state: { errorMessage: string; }) => state.errorMessage;

export default testCollection1Reducer;
