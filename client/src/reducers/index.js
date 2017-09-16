import { combineReducers } from 'redux';
import { LOAD_CATEGORIES, LOAD_POSTS } from '../actions';

const initialState = {
  categories: [],
  posts: []
};

function category(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      //console.log('actions', action);
      return action.categories;
    default:
      return state;
  }
}

function post(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      //console.log('actions', action);
      return Object.assign({}, state, {
        posts: action.posts
      });

    default:
      return state;
  }
}

export default combineReducers({
  category,
  post
});
