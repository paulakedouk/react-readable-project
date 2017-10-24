export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const LOAD_POSTS = 'LOAD_POSTS';
export const FETCH_POSTS = 'FETCH_POST';
export const VOTE_POST = 'VOTE_POST';

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const API = `http://localhost:5001`;
export const owner = 'Paula';

const headers = {
  Accept: 'application/json',
  Authorization: owner
};

// const editPost = ({ post }) => ({
//   type: EDIT_POST,
//   post
// });

const loadCategories = categories => ({
  type: LOAD_CATEGORIES,
  categories
});

export const categoriesAPI = () => dispatch => {
  return fetch(`${API}/categories`, { headers })
    .then(res => res.json())
    .then(data => dispatch(loadCategories(data)));
};

const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
});

export const postsAPI = () => dispatch => {
  return fetch(`${API}/posts`, { headers })
    .then(res => res.json())
    .then(posts => dispatch(loadPosts(posts)));
};

export const createPost = post => (dispatch, getState) => {
  post.id = Math.random().toString();

  return fetch(`${API}/posts/${post.id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(post)
  }).then(res => {
    let state = getState();
    let posts = state.posts.posts.slice();
    posts.push(post);
    dispatch(loadPosts(posts));
  });
};

const votePost = ({ id, voteScore }) => ({
  type: VOTE_POST,
  id,
  voteScore
});

export const votePostAPI = (id, vote) => dispatch => {
  return fetch(`${API}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: vote })
  })
    .then(res => res.json())
    .then(post => dispatch(votePost(post)));
};
