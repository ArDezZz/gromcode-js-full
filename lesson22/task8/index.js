export function createButton(buttonText) {
  let elemBody = document.querySelector('body');
  let itemButton = document.createElement('button');
  elemBody.append(itemButton);
  itemButton.textContent = buttonText;
}
