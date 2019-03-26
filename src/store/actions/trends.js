import { isLoadingAction, requestFailAction } from './common';
import actionTypes from './actionTypes';

import { baseRequestOptions } from '../../global/constants';
import { gitHubTrendlist } from '../../global/serverConfig';

const getTrends = () => (dispatch) => {
  dispatch(isLoadingAction(true, actionTypes.GET_TRENDS));

  return fetch(gitHubTrendlist, baseRequestOptions)
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: actionTypes.GET_TRENDS, payload: data });
      dispatch(requestFailAction(false, actionTypes.GET_TRENDS));
      dispatch(isLoadingAction(false, actionTypes.GET_TRENDS));
      return true;
    }).catch(() => {
      dispatch(requestFailAction(true, actionTypes.GET_TRENDS));
      dispatch(isLoadingAction(false, actionTypes.GET_TRENDS));
    });
};

export default getTrends;
