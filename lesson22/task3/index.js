const inputElem = document.querySelector('.text-input');

function changeSomeMean() {
  console.log(inputElem.value);
}

inputElem.addEventListener('change', changeSomeMean);
