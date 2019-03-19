import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  trends: []
};

const trendsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_TRENDS:
      return {
        ...state,
        languageTrends: action.payload
      };
    default:
      return state;
  }
};

export default trendsReducer;
