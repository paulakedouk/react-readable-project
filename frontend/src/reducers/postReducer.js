import {
  LOAD_POSTS,
  LOAD_POST,
  ADD_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
  SORT_POST,
  ADD_COMMENT
} from '../actions/types';

export function postReducer(state = {}, action) {
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
    case ADD_COMMENT:
      return {
        ...state,
        posts: {
          [action.postId]: {
            ...state.posts[action.postId],
            commentCount: state.posts[action.postId].commentCount + 1
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
