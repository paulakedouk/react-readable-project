import { headers, API } from '../utils/config';
import { LOAD_COMMENTS, ADD_COMMENT, VOTE_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from './types';

const loadComments = comments => ({
  type: LOAD_COMMENTS,
  comments
});

export const commentsAPI = parentId => dispatch => {
  fetch(`${API}/posts/${parentId}/comments`, { headers })
    .then(res => res.json())
    .then(comments => dispatch(loadComments(comments)));
};

const addComment = (comment, postId) => ({
  type: ADD_COMMENT,
  comment,
  postId
});

export const addCommentAPI = comment => dispatch => {
  const postId = comment.parentId;
  const id = Math.random().toString();
  const timestamp = Date.now();
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
    .then(comment => dispatch(addComment(comment, postId)));
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

const deleteComment = (comment, parentId) => ({
  type: DELETE_COMMENT,
  comment,
  parentId
});

export const deleteCommentAPI = (id, parentId) => dispatch => {
  fetch(`${API}/comments/${id}`, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(id)
  })
    .then(res => res.json())
    .then(comment => dispatch(deleteComment(comment, parentId)));
};
