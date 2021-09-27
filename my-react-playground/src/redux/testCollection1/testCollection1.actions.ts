import axios from 'axios';
import { TestCollection1ActionTypes } from './testCollection1.types';

export const fetchTestCollection1Start = () => ({
  type: TestCollection1ActionTypes.FETCH_PRODUCTS_START,
});

export const fetchTestCollection1Success = (testCollection1List: any) => ({
  type: TestCollection1ActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: testCollection1List,
});

export const fetchTestCollection1Failure = (error: any) => ({
  type: TestCollection1ActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchTestCollection1StartAsync = (url: string) => (dispatch: any) => {
  dispatch(fetchTestCollection1Start());
  axios
    .get(url)
    .then((response) => dispatch(fetchTestCollection1Success(response.data)))
    .catch((error) => dispatch(fetchTestCollection1Failure(error)));
};
