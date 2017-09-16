import { combineReducers } from 'redux';
import { LOAD_CATEGORIES, LOAD_POSTS } from '../actions';

const initialState = {
  categories: []
};

function category(state = initialState, action) {
  const { categories } = action;
  switch (action.type) {
    case LOAD_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

function post(state = {}, action) {
  const { posts } = action;
  switch (action.type) {
    case LOAD_POSTS:
      return action.posts;
    default:
      return state;
  }
}

export default combineReducers({
  category,
  post
});
