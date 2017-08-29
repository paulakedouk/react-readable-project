export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function addComment({ title, author, category, msg }) {
  return {
    type: ADD_COMMENT,
    title,
    author,
    category,
    msg
  };
}

export function removeComment({ title, author, category, msg }) {
  return {
    type: REMOVE_COMMENT,
    title,
    author,
    category,
    msg
  };
}
