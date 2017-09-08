import { LOAD_CATEGORIES } from '../actions';
import { LOAD_POSTS } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  categories: [],
  posts: []
};

function category(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return {
        ...state,
        categories: action.data
      };
    default:
      return state;
  }
}

function posts(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.data
      };
    default:
      return state;
  }
}

export default combineReducers({
  category,
  posts
});
