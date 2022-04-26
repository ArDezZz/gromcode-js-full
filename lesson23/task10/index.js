export function finishForm() {
  let formItem = document.querySelector('input[type=text]');
  let itemInput = document.createElement('input');
  itemInput.setAttribute('type', 'text');
  itemInput.setAttribute('name', 'login');
  formItem.before(itemInput);
  formItem.setAttribute('type', 'password');
}
finishForm();
