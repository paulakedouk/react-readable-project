import { headers, API } from '../utils/config';

import { ADD_POST, EDIT_POST, LOAD_POSTS, LOAD_POST, VOTE_POST, SORT_POST, DELETE_POST } from './types';

const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
});

export const postsAPI = () => dispatch => {
  fetch(`${API}/posts`, { headers })
    .then(res => res.json())
    .then(posts => dispatch(loadPosts(posts)));
};

const loadPost = post => ({
  type: LOAD_POST,
  post
});

export const postAPI = id => dispatch => {
  fetch(`${API}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(post => dispatch(loadPost(post)));
};

const addPost = post => ({
  type: ADD_POST,
  post
});

export const addPostAPI = post => dispatch => {
  const id = Math.random().toString();
  const timestamp = Date.now();
  post = { ...post, id, timestamp };
  fetch(`${API}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post => dispatch(addPost(post)));
};

const votePost = ({ id, voteScore }) => ({
  type: VOTE_POST,
  id,
  voteScore
});

export const votePostAPI = (id, vote) => dispatch => {
  fetch(`${API}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  })
    .then(res => res.json())
    .then(post => dispatch(votePost(post)));
};

const editPost = post => ({
  type: EDIT_POST,
  post
});

export const editPostAPI = (id, post) => dispatch => {
  fetch(`${API}/posts/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post => dispatch(editPost(post)));
};

const deletePost = id => ({
  type: DELETE_POST,
  id
});

export const deletePostAPI = id => dispatch => {
  fetch(`${API}/posts/${id}`, {
    method: 'DELETE',
    headers
  }).then(() => dispatch(deletePost(id)));
};

export const sortPost = sort => ({
  type: SORT_POST,
  sort
});
