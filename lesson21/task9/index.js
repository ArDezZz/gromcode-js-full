export function finishList() {
  let mainList = document.querySelector('.list');
  let liFive = document.querySelector('.special');
  const liItem = document.createElement('li');
  liItem.textContent = '1';

  const liItem2 = document.createElement('li');
  liItem2.textContent = '8';

  const liItem3 = document.createElement('li');
  liItem3.textContent = '4';

  const liItem4 = document.createElement('li');
  liItem4.textContent = '6';

  mainList.append(liItem2);
  mainList.prepend(liItem);
  liFive.before(liItem3);
  liFive.after(liItem4);
}
finishList();
