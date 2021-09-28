import { createSelector } from 'reselect';

const selectBackendAPI = (state: { backendAPI: any }) => state.backendAPI;

export const selectBackendAPIData = createSelector(
  [selectBackendAPI],
  (backendAPI) => backendAPI.backendAPIData
);

export const selectIsBackendAPIFetching = createSelector(
  [selectBackendAPI],
  (backendAPI) => backendAPI.isFetching
);
