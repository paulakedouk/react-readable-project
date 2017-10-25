import axios from 'axios';

const root = `http://localhost:5001`;
export const owner = 'Paula';

const generateToken = () => {
  const token = Math.random()
    .toString(36)
    .substr(-8);
  localStorage.setItem('token', token);
  return token;
};

const token = localStorage.getItem('token') || generateToken();
axios.defaults.headers.common['Authorization'] = token;

const api = {};

const getCommentCount = postArr => {
  const promiseArr = postArr.map(post => api.getComments(post.id));
  return axios
    .all(promiseArr)
    .then(resultArr => resultArr.map(result => result.length))
    .then(lengthArr =>
      lengthArr.map((length, index) => {
        postArr[index].comments = length;
        return postArr[index];
      })
    );
};

/* CATEGORIES */

api.getCategories = () =>
  axios
    .get(`${root}/categories`)
    .then(res => res.data.categories)
    .then(categories => categories.map(category => category.name));

api.getCategoryPosts = category => axios.get(`${root}/${category}/posts`).then(res => getCommentCount(res.data));

/* POSTS */

api.getPosts = () => axios.get(`${root}/posts`).then(res => getCommentCount(res.data));
api.getPost = id => axios.get(`${root}/posts/${id}`).then(res => res.data);

api.addPost = post => {
  const id = Math.random().toString();
  const timestamp = Math.floor(Date.now() / 1000);
  post = { ...post, id, timestamp };
  return axios.post(`${root}/posts`, post).then(res => res.data);
};

api.votePost = (id, vote) => axios.post(`${root}/posts/${id}`, { option: vote }).then(res => res.data);

api.editPost = (id, post) => axios.put(`${root}/posts/${id}`, post).then(res => res.data);

api.deletePost = id => axios.delete(`${root}/posts/${id}`);

/* COMMENTS */

api.getComments = id => axios.get(`${root}/posts/${id}/comments`).then(res => res.data);

api.addComment = comment => {
  const id = Math.random().toString();
  const timestamp = Date.now();
  comment = { ...comment, id, timestamp };
  return axios.post(`${root}/comments`, comment).then(res => res.data);
};

api.voteComment = (id, vote) => axios.post(`${root}/comments/${id}`, { option: vote }).then(res => res.data);

api.editComment = (id, comment) => axios.put(`${root}/comments/${id}`, comment).then(res => res.data);

api.deleteComment = id => axios.delete(`${root}/comments/${id}`).then(res => res.data);

export default api;
