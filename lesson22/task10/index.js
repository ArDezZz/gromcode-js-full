const btns = [...document.querySelectorAll('.pagination__page')];

function handleClick(event) {
  console.log(event.target.textContent);
}

btns.map(el => {
  el.addEventListener('click', handleClick);
});
