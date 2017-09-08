let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const API = `http://localhost:5001`;
const auth = 'react-redux';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_POSTS = 'LOAD_POSTS';

export function getCategories() {
  return dispatch => {
    fetch(`${API}/categories`, { headers: { Authorization: auth } })
      .then(res => res.json())
      .then(data => dispatch(loadCategories(data.categories)));
  };
}

export const loadCategories = data => {
  return { type: LOAD_CATEGORIES, data };
};

export function getPostList() {
  return dispatch => {
    fetch(`${API}/posts`, { headers: { Authorization: auth } })
      .then(res => res.json())
      .then(data => dispatch(loadPostList(data)));
  };
}

export const loadPostList = data => {
  return { type: LOAD_POSTS, data };
};
