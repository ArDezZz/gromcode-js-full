const baseUrl = 'https://627ea7fc271f386ceffbc3ba.mockapi.io/api/v1/users/';

let btnRegister = document.querySelector('.submit-button');

const sendDataHandler = () => {
  let elemsInputEmail = document.querySelector('input[type=email]').value;
  let elemsInputName = document.querySelector('input[type=text]').value;
  let elemsInputPass = document.querySelector('input[type=password]').value;
  let res = [elemsInputEmail, elemsInputName, elemsInputPass];
  console.log(res);
};

btnRegister.addEventListener('click', sendDataHandler);
