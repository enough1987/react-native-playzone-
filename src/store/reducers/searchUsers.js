import orderBy from 'lodash/orderBy';
import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  headersList: [
    { label: 'name' },
    { label: 'forks' },
    { label: 'stars' },
    { label: 'size' },
    { label: 'desc' }
  ],
  usersList: [],
  sortedBy: {
    label: '',
    order: ''
  }
};

const searchUsersReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.SORT_USERS:
      return {
        ...state,
        sortedBy: { label: action.label, order: action.order },
        usersList: orderBy(state.usersList, [action.label], [action.order])
      };
    case actionTypes.SEARCH_USERS:
      if (Array.isArray(action.payload.items)) {
        const usersList = action.payload.items.reduce((arr, item) => {
          arr.push({
            name: item.name,
            forks: item.forks,
            stars: item.stargazers_count,
            size: item.size,
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
