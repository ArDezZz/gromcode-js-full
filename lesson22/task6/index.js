export function setButton(buttonText) {
  let elemBody = document.querySelector('body');
  let createElement = document.createElement('button');
  elemBody.append(createElement);
  createElement.textContent = buttonText;
}
setButton('YO');
