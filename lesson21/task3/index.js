const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};
getItemsList();
const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  const finalArray = Array.from(elementsArray);
  console.dir(finalArray);
  return finalArray;
};
getItemsArray();
