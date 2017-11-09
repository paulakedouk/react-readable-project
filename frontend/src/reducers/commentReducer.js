import { LOAD_COMMENTS, ADD_COMMENT, VOTE_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../actions/types';

export function commentReducer(state = {}, action) {
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
