import axios from 'axios';

export const ADD_TEST_COLLECTION1_BEGIN = 'ADD_COLLECTION1_BEGIN';
export const ADD_TEST_COLLECTION1_SUCCESS = 'ADD_TEST_COLLECTION1_SUCCESS';
export const ADD_TEST_COLLECTION1_FAILURE = 'ADD_TEST_COLLECTION1_FAILURE';

const addTestCollection1Begin = () => ({
  type: ADD_TEST_COLLECTION1_BEGIN
});

const addTestCollection1Success = (data: any) => ({
  type: ADD_TEST_COLLECTION1_SUCCESS,
  payload: { data }
});

const addTestCollection1Failure = (error: any) => ({
  type: ADD_TEST_COLLECTION1_FAILURE,
  payload: { error }
});

export function addTestCollection1(url: string, body: any) {
  return async (dispatch: any) => {
    dispatch(addTestCollection1Begin());

    axios.post(url, body, { headers: { 'Context-Type': 'application/json' } })
      .then((response) => {
        console.log('response: ', response);
        dispatch(addTestCollection1Success(response.data));
        return response;
      })
      .catch((error) => {
        dispatch(addTestCollection1Failure(error));
        return error;
      });
  };
}
