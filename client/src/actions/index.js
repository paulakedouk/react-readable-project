export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const LOAD_POSTS = 'LOAD_POSTS';
export const FETCH_POSTS = 'FETCH_POST';

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

export function addPost({ post }) {
  return { type: ADD_POST, post: post };
}

export function editPost({ post }) {
  return { type: EDIT_POST, post };
}

export function loadCategories(categories) {
  return {
    type: LOAD_CATEGORIES,
    categories
  };
}

export function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts
  };
}

export function categoriesAPI() {
  return dispatch => {
    return fetch(`${API}/categories`, { headers })
      .then(res => res.json())
      .then(data => dispatch(loadCategories(data)));
  };
}

export function postsAPI() {
  return dispatch => {
    return fetch(`${API}/posts`, { headers })
      .then(res => res.json())
      .then(data => dispatch(loadPosts(data)));
  };
}

export function newPost(values = [], callback, id) {
  const { title, author, category, body } = values;

  const post = {
    timestamp: Date.now(),
    title,
    author,
    category,
    body
  };

  return dispatch => {
    return fetch(`${API}/posts/${id}`, { headers, method: 'POST' }).then(res => {
      callback();
      dispatch(addPost(res));
    });
  };
}
