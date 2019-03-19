const commonActionTypes = {
  REQUEST_FAIL: 'REQUEST_FAIL',
  IS_LOADING: 'IS_LOADING'
};

const searchPageActionTypes = {
  SEARCH_USERS: 'SEARCH_USERS'
};

export default {
  ...commonActionTypes,
  ...searchPageActionTypes
};
