import axios from 'axios';

export const DELETE_TEST_COLLECTION1_BEGIN = 'DELETE_COLLECTION1_BEGIN';
export const DELETE_TEST_COLLECTION1_SUCCESS = 'DELETE_TEST_COLLECTION1_SUCCESS';
export const DELETE_TEST_COLLECTION1_FAILURE = 'DELETE_TEST_COLLECTION1_FAILURE';

const deleteTestCollection1Begin = () => ({
  type: DELETE_TEST_COLLECTION1_BEGIN,
});

const deleteTestCollection1Success = (data: any) => ({
  type: DELETE_TEST_COLLECTION1_SUCCESS,
  payload: { data },
});

const deleteTestCollection1Failure = (error: any) => ({
  type: DELETE_TEST_COLLECTION1_FAILURE,
  payload: { error },
});

export function deleteTestCollection1(url: string, body: string) {
  return async (dispatch: any) => {
    dispatch(deleteTestCollection1Begin());

    axios
      .delete(`${url}/${body}`)
      .then((response) => {
        dispatch(deleteTestCollection1Success(response.data));
        return response;
      })
      .catch((error) => {
        dispatch(deleteTestCollection1Failure(error));
        return error;
      });
  };
}
