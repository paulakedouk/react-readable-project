import { LOAD_CATEGORIES } from '../actions/types';

export function categoryReducer(state = {}, action) {
  const { categories } = action;
  if (action.type === LOAD_CATEGORIES) {
    return { ...state, categories };
  } else {
    return state;
  }
}
