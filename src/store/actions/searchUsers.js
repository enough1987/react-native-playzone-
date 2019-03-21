import { isLoadingAction, requestFailAction } from './common';
import actionTypes from './actionTypes';
import { baseUrl, baseRequestOptions } from '../../global/constants';

export const sortUsers = (label, order) => ({
  type: actionTypes.SORT_USERS,
  label,
  order
});

export const searchUsers = keyword => (dispatch) => {
  dispatch(isLoadingAction(true, actionTypes.SEARCH_USERS));

  return fetch(`${baseUrl}/api/github/search/${keyword}`, baseRequestOptions)
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: actionTypes.SEARCH_USERS, payload: data });
      dispatch(requestFailAction(false, actionTypes.SEARCH_USERS));
      dispatch(isLoadingAction(false, actionTypes.SEARCH_USERS));
      return true;
    })
    .catch(() => {
      dispatch(requestFailAction(true, actionTypes.SEARCH_USERS));
      dispatch(isLoadingAction(false, actionTypes.SEARCH_USERS));
    });
};
