export function trim(str) {
  return str.length > 16 ? str.slice(0, 16) + '...' : str;
}

export function objectFromArray(arr, key = 'id') {
  if (arr && arr.length) {
    return arr.reduce((v, i) => {
      v[i[key]] = i;
      return v;
    }, {});
  } else {
    return {};
  }
}
