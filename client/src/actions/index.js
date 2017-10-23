export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const LOAD_POSTS = 'LOAD_POSTS';
export const ADD_POST = 'ADD_POST';
export const VOTE_POST = 'VOTE_POST';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';

const API = `http://localhost:5001`;

const headers = {
  Accept: 'application/json',
  Authorization: 'whatever-you-want'
};

/* CATEGORY */

function loadCategories(categories) {
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

const votePost = ({ id, voteScore }) => ({
  type: VOTE_POST,
  id,
  voteScore
});

export const votePostAPI = (id, vote) => dispatch => {
  return fetch(
    `${API}/posts/${id}`,
    { option: vote },
    {
      method: 'POST',
      headers,
      body: JSON.stringify(vote)
    }
  )
    .then(res => res.json())
    .then(data => dispatch(votePost(data)));
};

export const getPostsAPI = () => dispatch => {
  fetch(`${API}/posts`, { headers })
    .then(res => res.json())
    .then(data => dispatch(loadPosts(data)));
};

export const createPost = postReducer => (dispatch, getState) => {
  postReducer.id = Math.random().toString();
  postReducer.timestamp = Date.now();

  fetch(`${API}/posts/${postReducer.id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(postReducer)
  });
  let state = getState();
  let posts = state.postReducer.posts.slice();
  posts.push(postReducer);
  dispatch(loadPosts(posts));
};

/* COMMENTS */

const receiveComments = (postId, commentReducer) => ({
  type: LOAD_COMMENTS,
  comments: commentReducer,
  postId: postId
});

export const commentsAPI = postId => dispatch => {
  fetch(`${API}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => dispatch(receiveComments(postId, data)));
};

export const createComment = (commentReducer, postId) => dispatch => {
  console.log(commentReducer);
  commentReducer.parentId = postId;
  console.log(postId);
  fetch(`${API}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(commentReducer)
  })
    .then(res => res.json())
    .then(comment => dispatch(commentsAPI(postId)));
};
