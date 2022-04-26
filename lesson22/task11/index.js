export function manageClasses() {
  let item1 = document.querySelector('.one');
  item1.classList.add('selected');

  let item2 = document.querySelector('.two');
  item2.classList.remove('selected');

  let list3 = document.querySelector('.three');
  list3.classList.toggle('three_done');

  let list4 = document.querySelector('.four');
  if (list4.classList.contains('some-class')) {
    list4.classList.add('another-class');
  }
}
manageClasses();
