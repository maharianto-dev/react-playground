import {
  FETCH_TEST_COLLECTION1_BEGIN,
  FETCH_TEST_COLLECTION1_SUCCESS,
  FETCH_TEST_COLLECTION1_FAILURE
} from '../../actions/TestCollection1/testCollection1Actions';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const testCollection1Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TEST_COLLECTION1_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_TEST_COLLECTION1_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    case FETCH_TEST_COLLECTION1_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: []
      };
    default:
      return state;
  }
};
export default testCollection1Reducer;
