import { headers, API } from '../utils/config';
import { LOAD_COMMENTS, ADD_COMMENT, VOTE_COMMENT, EDIT_COMMENT, DELETE_COMMENT, COMMENT_COUNT_UP } from './types';

const loadComments = comments => ({
  type: LOAD_COMMENTS,
  comments
});

export const commentsAPI = id => dispatch => {
  fetch(`${API}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(comments => dispatch(loadComments(comments)));
};

const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

const updateCommentCount = postId => ({
  type: COMMENT_COUNT_UP,
  postId
});

export const addCommentAPI = comment => dispatch => {
  const id = Math.random().toString();
  const timestamp = Date.now();
  const postId = comment.id;
  comment = { ...comment, id, timestamp };
  fetch(`${API}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(comment => dispatch(addComment(comment)))
    .then(dispatch(updateCommentCount(postId)));
};

const voteComment = ({ id, voteScore }) => ({
  type: VOTE_COMMENT,
  id,
  voteScore
});

export const voteCommentAPI = (id, vote) => dispatch => {
  fetch(`${API}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  })
    .then(res => res.json())
    .then(comment => dispatch(voteComment(comment)));
};

const editComment = comment => ({
  type: EDIT_COMMENT,
  comment
});

export const editCommentAPI = (id, comment) => dispatch => {
  fetch(`${API}/comments/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(comment => dispatch(editComment(comment)));
};

const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const deleteCommentAPI = id => dispatch => {
  fetch(`${API}/comments/${id}`, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(id)
  })
    .then(res => res.json())
    .then(comment => dispatch(deleteComment(comment)));
};
