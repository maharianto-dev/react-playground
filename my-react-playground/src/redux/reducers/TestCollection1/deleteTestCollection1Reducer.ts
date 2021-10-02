import {
  DELETE_TEST_COLLECTION1_BEGIN,
  DELETE_TEST_COLLECTION1_SUCCESS,
  DELETE_TEST_COLLECTION1_FAILURE,
} from '../../actions/TestCollection1/deleteTestCollection1Actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const deleteTestCollection1Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DELETE_TEST_COLLECTION1_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DELETE_TEST_COLLECTION1_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case DELETE_TEST_COLLECTION1_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
      };
    default:
      return state;
  }
};
export default deleteTestCollection1Reducer;
