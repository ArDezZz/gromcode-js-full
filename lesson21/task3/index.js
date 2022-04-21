export const getItemList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

getItemList();

export const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  const finalArray = Array.from(elementsArray);
  console.dir(elementsArray);
  return finalArray;
};
getItemsArray();
