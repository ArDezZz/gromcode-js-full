const elemButton = document.querySelector('.single-use-btn');

function clickBtn() {
  console.log(`clicked`);
  console.log(this);
  this.removeEventListener('click', clickBtn);
}

elemButton.addEventListener('click', clickBtn);
