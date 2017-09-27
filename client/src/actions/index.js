export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const ADD_POST = 'ADD_POST';
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

const addPost = data => ({
  type: ADD_POST,
  data
});

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

export function createPost(values, callback) {
  const { title, author, category, text } = values;

  const postInput = {
    timestamp: Date.now(),
    title,
    author,
    category,
    text
  };

  return dispatch => {
    return fetch(`${API}/posts`, postInput).then(res => {
      callback();
      dispatch(addPost(res.postInput));
    });
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
