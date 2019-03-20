import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  usersList: []
};

const searchUsersReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.SEARCH_USERS:
      if (Array.isArray(action.payload.items)) {
        const usersList = action.payload.items.reduce((arr, item) => {
          arr.push({
            name: item.name,
            forks: item.forks,
            stars: item.stargazers_count,
            size: item.size,
            language: item.language,
            desc: item.description
          });
          return arr;
        }, []);
        return {
          ...state,
          usersList
        };
      }
      return state; // TODO: can it be not an array?
    default:
      return state;
  }
};

export default searchUsersReducer;
