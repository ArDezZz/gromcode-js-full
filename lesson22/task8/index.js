const elemInput = document.querySelector('.text-input');

function textFromInput(event) {
  console.log(event.target.value);
}

elemInput.addEventListener('change', textFromInput);
