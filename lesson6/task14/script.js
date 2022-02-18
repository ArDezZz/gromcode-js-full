const getSubArray = (arr, numberOfElements) => {
  const res = [...arr];
  res.length = numberOfElements;
  return res;
};
