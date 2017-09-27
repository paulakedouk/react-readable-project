import { combineReducers } from 'redux';
import { LOAD_CATEGORIES, LOAD_POSTS, ADD_POST } from '../actions';

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
  categories: category,
  posts: post
});
