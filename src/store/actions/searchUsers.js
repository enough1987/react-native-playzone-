import { isLoadingAction, requestFailAction } from './common';
import actionTypes from './actionTypes';

const headers = {
  'Content-type': 'application/json',
  Accept: 'application/json'
};

export const searchUsers = keyword => (dispatch) => {
  dispatch(isLoadingAction(true, actionTypes.SEARCH_USERS));

  return fetch(`/api/github/search/${keyword}`, { // TODO : fix
    method: 'GET',
    mode: 'no-cors',
    headers
  })
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: actionTypes.SEARCH_USERS, payload: data });
      dispatch(isLoadingAction(false, actionTypes.SEARCH_USERS));
      return true;
    })
    .catch((error) => {
      dispatch(requestFailAction(error, actionTypes.SEARCH_USERS));
      dispatch(isLoadingAction(false, actionTypes.SEARCH_USERS));
    });
};

export const sortAction = (sortBy, seq) => ({
  type: actionTypes.SORT_USERS,
  sortBy,
  seq
});
