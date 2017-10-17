import { combineReducers } from 'redux';

import { LOAD_CATEGORIES, LOAD_POSTS } from '../actions';

const initialState = {
  categories: [],
  posts: []
};

function post(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      const { posts } = action;
      return posts;
    default:
      return state;
  }
}

function category(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

export default combineReducers({
  categories: category,
  posts: post
});
