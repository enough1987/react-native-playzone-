import actionTypes from './actionTypes';

export const isLoadingAction = (isLoading, isLoadingType) => ({
  type: actionTypes.IS_LOADING,
  isLoading,
  isLoadingType
});

export const requestFailAction = (error, errorType) => ({
  type: actionTypes.REQUEST_FAIL,
  error,
  errorType
});
