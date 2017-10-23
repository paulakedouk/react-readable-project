import { combineReducers } from 'redux';

import { LOAD_CATEGORIES, LOAD_POSTS, ADD_POST, VOTE_POST, LOAD_COMMENTS } from '../actions';

const initialState = {
  categories: [],
  posts: [],
  comments: []
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
    case VOTE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: {
            ...state.posts[action.id],
            voteScore: action.voteScore
          }
        }
      };

    default:
      return state;
  }
}

function commentReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      const { postId, comments } = action;
      return {
        ...state,
        [postId]: comments
      };

    default:
      return state;
  }
}

export default combineReducers({
  categoryReducer,
  postReducer,
  commentReducer
});
