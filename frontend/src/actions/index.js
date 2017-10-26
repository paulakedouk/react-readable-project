export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POST = 'LOAD_POST';
export const FETCH_POSTS = 'FETCH_POST';
export const VOTE_POST = 'VOTE_POST';
export const SORT_POST = 'SORT_POST';
export const DELETE_POST = ' DELETE_POST';

export const LOAD_COMMENTS = 'LOAD_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

const API = `http://localhost:5001`;

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
  'Content-Type': 'application/json'
};

/* CATEGORIES */

const loadCategories = categories => ({
  type: LOAD_CATEGORIES,
  categories
});

export const categoriesAPI = () => dispatch => {
  fetch(`${API}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
    .then(data => dispatch(loadCategories(data)));
};

const categoryPost = category => dispatch => {
  fetch(`${API}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => dispatch(loadCategories(data)));
};

/* POSTS */

const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
});

export const postsAPI = category => dispatch => {
  if (category) {
    categoryPost(category).then(posts => dispatch(loadPosts(posts)));
  } else {
    fetch(`${API}/posts`, { headers })
      .then(res => res.json())
      .then(posts => dispatch(loadPosts(posts)));
  }
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

/* COMMENTS */

const loadComments = comments => ({
  type: LOAD_COMMENTS,
  comments
});

export const commentsAPI = id => dispatch => {
  fetch(`${API}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(comments => dispatch(loadComments(comments)));
};

const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const addCommentAPI = comment => dispatch => {
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
    .then(comment => dispatch(addComment(comment)));
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
  fetch(`${API}/comments/${id}`, comment, {
    method: 'PUT',
    headers,
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(comment => dispatch(editComment(comment)));
};

const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const deleteCommentAPI = id => dispatch => {
  fetch(`${API}/comments/${id}`, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(id)
  })
    .then(res => res.json())
    .then(comment => dispatch(deleteComment(comment)));
};
