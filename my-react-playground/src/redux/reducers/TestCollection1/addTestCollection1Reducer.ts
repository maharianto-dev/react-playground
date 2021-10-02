import {
  ADD_TEST_COLLECTION1_BEGIN,
  ADD_TEST_COLLECTION1_SUCCESS,
  ADD_TEST_COLLECTION1_FAILURE
} from '../../actions/TestCollection1/addTestCollection1Actions';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const addTestCollection1Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TEST_COLLECTION1_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ADD_TEST_COLLECTION1_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    case ADD_TEST_COLLECTION1_FAILURE:
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
export default addTestCollection1Reducer;
