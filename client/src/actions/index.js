export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_POSTS = 'LOAD_POSTS';

const API = `http://localhost:5001`;

const headers = {
  Accept: 'application/json',
  Authorization: 'whatever-you-want'
};

/* CATEGORY */

export function loadCategories(categories) {
  return {
    type: LOAD_CATEGORIES,
    categories
  };
}

export const getCategoriesAPI = () => dispatch => {
  fetch(`${API}/categories`, { headers })
    .then(res => res.json())
    .then(data => dispatch(loadCategories(data)));
};

/* POSTS */

function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts
  };
}

export const getPostsAPI = () => dispatch => {
  fetch(`${API}/posts`, { headers })
    .then(res => res.json())
    .then(data => dispatch(loadPosts(data)));
};
