import axios from 'axios';

export const FETCH_TEST_COLLECTION1_BEGIN = 'FETCH_TEST_COLLECTION1_BEGIN';
export const FETCH_TEST_COLLECTION1_SUCCESS = 'FETCH_TEST_COLLECTION1_SUCCESS';
export const FETCH_TEST_COLLECTION1_FAILURE = 'FETCH_TEST_COLLECTION1_FAILURE';

const fetchTestCollection1Begin = () => ({
  type: FETCH_TEST_COLLECTION1_BEGIN
});

const fetchTestCollection1Success = (data: any) => ({
  type: FETCH_TEST_COLLECTION1_SUCCESS,
  payload: { data }
});

const fetchTestCollection1Failure = (error: any) => ({
  type: FETCH_TEST_COLLECTION1_FAILURE,
  payload: { error }
});

export function fetchTestCollection1(url: string) {
  return async (dispatch: any) => {
    dispatch(fetchTestCollection1Begin());

    axios.get(url)
      .then((response) => {
        dispatch(fetchTestCollection1Success(response.data));
        return response;
      })
      .catch((error) => {
        dispatch(fetchTestCollection1Failure(error));
        return error;
      });
  };
}
