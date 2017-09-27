export function trim(str) {
  return str.length > 16 ? str.slice(0, 16) + '...' : str;
}
