const baseUrl = 'https://627ea7fc271f386ceffbc3ba.mockapi.io/api/v1/users/';

let btnRegister = document.querySelector('.submit-button');

const sendDataHandler = () => {
  let elemsInputEmail = document.querySelector('input[type=email]');
  let elemsInputName = document.querySelector('input[type=text]');
  let elemsInputPass = document.querySelector('input[type=password]');
  console.log([elemsInputEmail.value, elemsInputName.value, elemsInputPass.value]);
};

btnRegister.addEventListener('click', sendDataHandler);
