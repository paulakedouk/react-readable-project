import { combineReducers } from 'redux';

import { LOAD_CATEGORIES, LOAD_POSTS, ADD_POST } from '../actions';

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
  const { post } = action;
  switch (action.type) {
    case LOAD_POSTS:
      return Object.assign({}, state, {
        posts: action.posts
      });
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: post
        }
      };

    default:
      return state;
  }
}

export default combineReducers({
  categoryReducer,
  postReducer
});
