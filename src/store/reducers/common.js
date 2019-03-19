import actionTypes from '../actions/actionTypes';

const defaultState = {
  errors: {},
  loading: {}
};

const commonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_FAIL:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.errorType]: action.error
        }
      };
    case actionTypes.IS_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.isLoadingType]: action.isLoading
        }
      };
    default:
      return state;
  }
};

export default commonReducer;
