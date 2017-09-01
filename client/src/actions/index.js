import axios from 'axios';

export const LOAD_POSTS = 'LOAD_POSTS';

const ROOT_URL = 'http://localhost:5001/posts';
const AUTH_HEADERS = { Authorization: 'whatever-you-want', Accept: 'application/json' };

axios.defaults.headers.common['Authorization'] = AUTH_HEADERS;

export function loadPosts() {
  return dispatch => {
    axios.get(`${ROOT_URL}/posts`).then(res => dispatch(loadPostsSuccess(res.data)));
  };
}

function loadPostsSuccess(data) {
  return {
    type: LOAD_POSTS,
    payload: data
  };
}
