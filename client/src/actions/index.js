export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const LOAD_POSTS = 'LOAD_POSTS';

const API = `http://localhost:5001`;

const headers = {
  Accept: 'application/json',
  Authorization: 'whatever-you-want'
};

/* CATEGORY */

const loadCategories = categories => ({
  type: LOAD_CATEGORIES,
  categories
});

export const categoriesAPI = () => dispatch => {
  fetch(`${API}/categories`, { headers })
    .then(res => res.json())
    .then(data => dispatch(loadCategories(data)));
};

/* POSTS */

// const loadPosts = posts => ({
//   type: LOAD_POSTS,
//   posts
// });
