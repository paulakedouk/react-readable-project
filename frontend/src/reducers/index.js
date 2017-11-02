import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { postReducer } from './postReducer'
import { commentReducer } from './commentReducer'

export default combineReducers({
  category: categoryReducer,
  post: postReducer,
  comment: commentReducer
});
