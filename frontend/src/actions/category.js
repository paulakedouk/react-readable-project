import { LOAD_CATEGORIES } from './types';
import { headers, API } from '../utils/config';

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

export const categoryPostAPI = category => dispatch => {
  fetch(`${API}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => dispatch(loadCategories(data)));
};
