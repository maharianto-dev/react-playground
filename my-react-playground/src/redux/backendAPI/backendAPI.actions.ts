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

export const fetchBackendAPIDataStartAsync = (url: string) => (dispatch: any) => {
  dispatch(fetchBackendAPIDataStart());
  axios
    .get(url)
    .then((response) => dispatch(fetchBackendAPIDataSuccess(response.data)))
    .catch((error) => dispatch(fetchBackendAPIDataFailure(error)));
};
