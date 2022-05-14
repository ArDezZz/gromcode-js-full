//algo:
//1:find all values from inputs
//2:validation
//3:make one obj with values
//4:send all datas to the server

const baseUrl = 'https://627ea7fc271f386ceffbc3ba.mockapi.io/api/v1/users/';

let btnRegister = document.querySelector('.submit-button');
let form = document.querySelector('.login-form');

function sendDataToServer(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

const sendDataHandler = () => {
  let elemsInputEmail = document.querySelector('input[type=email]');
  let elemsInputName = document.querySelector('input[type=text]');
  let elemsInputPass = document.querySelector('input[type=password]');
  let res = {
    email: elemsInputEmail.value,
    name: elemsInputName.value,
    password: elemsInputPass.value,
  };
  sendDataToServer(res).then();
  elemsInputEmail.value = '';
  elemsInputName.value = '';
  elemsInputPass.value = '';
};

form.addEventListener('submit', e => {
  e.preventDefault();
});

btnRegister.addEventListener('click', sendDataHandler);
