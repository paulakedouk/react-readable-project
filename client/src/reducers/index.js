import { combineReducers } from 'redux';

import { LOAD_CATEGORIES, LOAD_POSTS } from '../actions';

const initialState = {
  categories: [],
  posts: []
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

function postReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return Object.assign({}, state, {
        posts: action.posts
      });

    default:
      return state;
  }
}

export default combineReducers({
  categoryReducer,
  postReducer
});
