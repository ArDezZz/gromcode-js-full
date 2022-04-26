export function getSection(num) {
  let item1 = document.querySelector(`span[data-number="${num}"]`);
  return item1.closest('.box').dataset.section;
}
console.log(getSection(5));
