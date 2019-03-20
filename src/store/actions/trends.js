import { isLoadingAction, requestFailAction } from './common';
import actionTypes from './actionTypes';

const baseUrl = 'http://ec2-54-222-208-228.cn-north-1.compute.amazonaws.com.cn:8000';
const headers = {
  'Content-type': 'application/json',
  Accept: 'application/json'
};

const getTrends = () => (dispatch) => {
  dispatch(isLoadingAction(true, actionTypes.GET_TRENDS));

  return fetch(`${baseUrl}/api/github/trendlist`, {
    method: 'GET',
    mode: 'no-cors',
    headers
  })
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: actionTypes.GET_TRENDS, payload: data });
      dispatch(isLoadingAction(false, actionTypes.GET_TRENDS));
      return true;
    }).catch((error) => {
      dispatch(requestFailAction(error, actionTypes.GET_TRENDS));
      dispatch(isLoadingAction(false, actionTypes.GET_TRENDS));
    });
};

export default getTrends;
