import api from '../utils/api';

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

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

/* CATEGORIES */

const loadCategories = categories => ({
  type: LOAD_CATEGORIES,
  categories
});

export const getCategories = () => dispatch => {
  api.getCategories().then(categories => dispatch(loadCategories(categories)));
};

/* POSTS */

const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
});

export const postsAPI = category => dispatch => {
  if (category) {
    api.getCategoryPosts(category).then(posts => dispatch(loadPosts(posts)));
  } else {
    api.getPosts().then(posts => dispatch(loadPosts(posts)));
  }
};

const loadPost = post => ({
  type: LOAD_POST,
  post
});

export const postAPI = id => dispatch => {
  api.getPost(id).then(post => dispatch(loadPost(post)));
};

const addPost = post => ({
  type: ADD_POST,
  post
});

export const addPostAPI = post => dispatch => {
  api.addPost(post).then(post => dispatch(addPost(post)));
};

const votePost = ({ id, voteScore }) => ({
  type: VOTE_POST,
  id,
  voteScore
});

export const votePostAPI = (id, vote) => dispatch => {
  api.votePost(id, vote).then(post => dispatch(votePost(post)));
};

const editPost = post => ({
  type: EDIT_POST,
  post
});

export const editPostAPI = (id, post) => dispatch => {
  api.editPost(id, post).then(post => dispatch(editPost(post)));
};

const deletePost = id => ({
  type: DELETE_POST,
  id
});

export const deletePostAPI = id => dispatch => {
  api.deletePost(id).then(() => dispatch(deletePost(id)));
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

export const getCommentsAPI = parentId => dispatch => {
  api.getComments(parentId).then(comments => dispatch(loadComments(comments)));
};

const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const addCommentAPI = comment => dispatch => {
  api.addComment(comment).then(comment => dispatch(addComment(comment)));
};

const voteComment = ({ id, voteScore }) => ({
  type: VOTE_COMMENT,
  id,
  voteScore
});

export const voteCommentAPI = (id, vote) => dispatch => {
  api.voteComment(id, vote).then(comment => dispatch(voteComment(comment)));
};

const editComment = comment => ({
  type: EDIT_COMMENT,
  comment
});

export const editCommentAPI = (id, comment) => dispatch => {
  api.editComment(id, comment).then(comment => dispatch(editComment(comment)));
};

const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const deleteCommentAPI = id => dispatch => {
  api.deleteComment(id).then(comment => dispatch(deleteComment(comment)));
};
