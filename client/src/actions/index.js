export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
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
