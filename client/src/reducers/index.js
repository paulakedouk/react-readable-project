import { combineReducers } from 'redux';
import { LOAD_CATEGORIES, LOAD_POSTS, ADD_POST, VOTE_POST } from '../actions';

const initialState = {
  categories: [],
  posts: []
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      //console.log('actions', action);
      return action.categories;
    default:
      return state;
  }
}

function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      //console.log('actions', action);
      return Object.assign({}, state, {
        posts: action.posts
      });
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post]
      };
    case VOTE_POST:
      return {
        ...state,
        posts: [...state.posts.filter(item => item.id === action.id), action.voteScore]
      };

    default:
      return state;
  }
}

export default combineReducers({
  categories: categoryReducer,
  posts: postReducer
});
