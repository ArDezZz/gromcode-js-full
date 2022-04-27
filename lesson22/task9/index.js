const elemCheckBox = document.querySelector('.task-status');

function checkStatus(event) {
  if (event.target.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
}

elemCheckBox.addEventListener('change', checkStatus);
