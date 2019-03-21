import orderBy from 'lodash/orderBy';
import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  headersList: [
    { label: 'name' },
    { label: 'forks' },
    { label: 'stars' },
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
            desc: item.description && item.description.length > 30
              ? `${item.description.slice(0, 30)}...`
              : item.description
          });
          return arr;
        }, []);
        return {
          ...state,
          usersList
        };
      }
      return state; // TODO: can it be not an array? API issue ?
    default:
      return state;
  }
};

export default searchUsersReducer;
