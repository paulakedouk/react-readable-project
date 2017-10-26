export function capitalize(str = '') {
  return typeof str !== 'string' ? '' : str[0].toUpperCase() + str.slice(1);
}

export const sort_by = key => {
  console.log(key);
  let sortOrder = 1;
  if (key[0] === '-') {
    sortOrder = -1;
    key = key.substr(1);
  }

  return function(a, b) {
    return sortOrder * (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0);
  };
};
