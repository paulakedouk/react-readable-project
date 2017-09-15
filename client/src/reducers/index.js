import { combineReducers } from 'redux';
import { LOAD_CATEGORIES, LOAD_POSTS } from '../actions';

function category(state = {}, action) {
  const { categories } = action;
  switch (action.type) {
    case LOAD_CATEGORIES:
      return {
        ...state,
        categories
      };
    default:
      return state;
  }
}

function post(state = {}, action) {
  const { posts } = action;
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts
      };
    default:
      return state;
  }
}

export default combineReducers({
  category,
  post
});
