import { combineReducers } from 'redux';
import {
  LOAD_CATEGORIES,
  LOAD_POSTS,
  LOAD_POST,
  ADD_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
  SORT_POST,
  LOAD_COMMENTS,
  ADD_COMMENT,
  VOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actions';

function categoryReducer(state = {}, action) {
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

function postReducer(state = {}, action) {
  const { posts, post } = action;
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: posts.reduce((accu, curr) => {
          accu[curr.id] = curr;
          return accu;
        }, {})
      };
    case LOAD_POST:
      return {
        ...state,
        posts: {
          [post.id]: post
        }
      };
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
    case EDIT_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: post
        }
      };
    case DELETE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: null
        }
      };
    case SORT_POST:
      return {
        ...state,
        sortBy: action.sort
      };
    default:
      return state;
  }
}

function commentReducer(state = {}, action) {
  const { comment, comments } = action;
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        comments: comments.reduce((accu, curr) => {
          accu[curr.id] = curr;
          return accu;
        }, {})
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.id]: comment
        }
      };
    case VOTE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.id]: {
            ...state.comments[action.id],
            voteScore: action.voteScore
          }
        }
      };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.id]: comment
        }
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.id]: null
        }
      };

    default:
      return state;
  }
}

export default combineReducers({
  category: categoryReducer,
  post: postReducer,
  comment: commentReducer
});
