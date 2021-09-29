import axios from 'axios';
import { BackendAPIActionTypes } from './backendAPI.types';

export const fetchBackendAPIDataStart = () => ({
  type: BackendAPIActionTypes.FETCH_BACKEND_API_START,
});

export const fetchBackendAPIDataSuccess = (backendAPIData: any) => ({
  type: BackendAPIActionTypes.FETCH_BACKEND_API_SUCCESS,
  payload: backendAPIData,
});

export const fetchBackendAPIDataFailure = (error: any) => ({
  type: BackendAPIActionTypes.FETCH_BACKEND_API_FAILURE,
  payload: error,
});

export const postBackendAPIDataStart = () => ({
  type: BackendAPIActionTypes.POST_BACKEND_API_START,
});

export const postBackendAPIDataSuccess = (backendAPIData: any) => ({
  type: BackendAPIActionTypes.POST_BACKEND_API_SUCCESS,
  payload: backendAPIData,
});

export const postBackendAPIDataFailure = (error: any) => ({
  type: BackendAPIActionTypes.POST_BACKEND_API_FAILURE,
  payload: error,
});

export const fetchBackendAPIDataStartAsync = (url: string) => {
  console.log('async called');
  return (dispatch: any) => {
    dispatch(fetchBackendAPIDataStart());
    axios
      .get(url)
      .then((response) => {
        console.log('fetch success!');
        dispatch(fetchBackendAPIDataSuccess(response.data));
        return response.data;
      })
      .catch((error) => dispatch(fetchBackendAPIDataFailure(error)));
  };
};

export const postBackendAPIDataStartAsync = (url: string, body: any) => (dispatch: any) => {
  dispatch(postBackendAPIDataStart());
  axios
    .post(url, body, { headers: { 'Content-Type': 'application/json' } })
    .then((response) => dispatch(postBackendAPIDataSuccess(response.data)))
    .catch((error) => dispatch(postBackendAPIDataFailure(error)));
};
