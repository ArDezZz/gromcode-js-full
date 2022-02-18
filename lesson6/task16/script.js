function removeDuplicates(array) {
  const resArr = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!resArr.includes(element)) {
      resArr.push(element);
    }
  }
  return resArr;
}
