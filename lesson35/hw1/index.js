export const parseUser = str => {
  try {
    JSON.parse(str);
  } catch (err) {
    return null;
  }
  return JSON.parse(str);
};
const res = parseUser('{"name":"Tom"}');
console.log(res);
