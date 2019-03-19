import { combineReducers } from 'redux';

import common from './common';
import trends from './trends';
import searchUsers from './searchUsers';

export default combineReducers({
  common,
  trends,
  searchUsers
});
