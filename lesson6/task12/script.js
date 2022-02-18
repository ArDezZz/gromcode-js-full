function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  const resultArr = [...array];

  for (let i = 0; i < resultArr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (resultArr[i] < resultArr[j]) {
        let currentEll = resultArr[i];
        resultArr[i] = resultArr[j];
        resultArr[j] = currentEll;
      }
    }
  }

  return resultArr;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        let currentEll = arr[i];
        arr[i] = arr[j];
        arr[j] = currentEll;
      }
    }
  }

  return arr;
}
