import { isLoadingAction, requestFailAction } from './common';
import actionTypes from './actionTypes';
import { baseRequestOptions } from '../../global/constants';
import { gitHubSearch } from '../../global/serverConfig';

export const sortUsers = (label, order) => ({
  type: actionTypes.SORT_USERS,
  label,
  order
});

export const searchUsers = keyword => (dispatch) => {
  dispatch(isLoadingAction(true, actionTypes.SEARCH_USERS));

  return fetch(`${gitHubSearch}/${keyword}`, baseRequestOptions)
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
