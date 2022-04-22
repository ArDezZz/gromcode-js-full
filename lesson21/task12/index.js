// export function squaredNumbers() {
//   let itemList1 = document.querySelector('.number');
//   let dataNumber1 = itemList1.dataset.number;
//   itemList1.setAttribute('data-squared-number', dataNumber1 * dataNumber1);

//   let itemList2 = itemList1.nextElementSibling;
//   let dataNumber2 = itemList2.dataset.number;
//   itemList2.setAttribute('data-squared-number', dataNumber2 * dataNumber2);

//   let itemList3 = itemList2.nextElementSibling;
//   let dataNumber3 = itemList3.dataset.number;
//   itemList3.setAttribute('data-squared-number', dataNumber3 * dataNumber3);
// }
// squaredNumbers();
function squaredNumbers() {
  const numbersElements = document.querySelectorAll('.number');
  [...numbersElements].map(elem => {
    elem.dataset.squaredNumber = Math.pow(elem.dataset.number, 2);
  });
  return numbersElements;
}
console.log(squaredNumbers());
