const commonActionTypes = {
  REQUEST_FAIL: 'REQUEST_FAIL',
  IS_LOADING: 'IS_LOADING'
};

const searchPageActionTypes = {
  SEARCH_USERS: 'SEARCH_USERS',
  SORT_USERS: 'SORT_USERS'
};

const trendsPageActionTypes = {
  GET_TRENDS: 'GET_TRENDS'
};

export default {
  ...commonActionTypes,
  ...searchPageActionTypes,
  ...trendsPageActionTypes
};
