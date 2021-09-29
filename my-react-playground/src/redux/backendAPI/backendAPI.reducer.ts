/* eslint-disable max-len */
import { BackendAPIActionTypes } from './backendAPI.types';

const INITIAL_STATE = {
  backendAPIData: [],
  isFetching: false,
  errorMessage: undefined,
};

export function backendAPIReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case BackendAPIActionTypes.FETCH_BACKEND_API_START:
      return {
        ...state,
        isFetching: true,
      };
    case BackendAPIActionTypes.FETCH_BACKEND_API_SUCCESS:
      return {
        ...state,
        backendAPIData: action.payload,
        isFetching: false,
      };
    case BackendAPIActionTypes.FETCH_BACKEND_API_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case BackendAPIActionTypes.POST_BACKEND_API_START:
      return {
        ...state,
        isFetching: true,
      };
    case BackendAPIActionTypes.POST_BACKEND_API_SUCCESS:
      return {
        ...state,
        backendAPIData: action.payload,
        isFetching: false,
      };
    case BackendAPIActionTypes.POST_BACKEND_API_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

// export const getBackendAPIData = (state: { backendAPIData: any; }) => state.backendAPIData;
// export const getBackendAPIDataPending = (state: { isFetching: boolean; }) => state.isFetching;
// export const getBackendAPIDataError = (state: { errorMessage: string; }) => state.errorMessage;

export default backendAPIReducer;
