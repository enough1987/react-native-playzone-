import { combineReducers } from 'redux';

import trendsReducer from './trends';

export default combineReducers({
  trands: trendsReducer
});
