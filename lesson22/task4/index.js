const elemCheckBox = document.querySelector('.task-status');

function checkStatus() {
  if (this.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
}

elemCheckBox.addEventListener('change', checkStatus);
