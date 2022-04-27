const btn = document.querySelectorAll('.btn');

// function fnc1(event) {
//   console.log(event.target.textContent);
// }
function fnc2() {
  console.log(this.textContent);
}

[...btn].map(el => {
  el.addEventListener('click', fnc2);
});
