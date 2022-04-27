const elemButton = document.querySelector('.search__btn');
const elemInput = document.querySelector('.search__input');

function getInputText() {
  console.log(elemInput.value);
}

elemButton.addEventListener('click', getInputText);
