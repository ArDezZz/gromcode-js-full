export function getTitle() {
  const elemTitle = document.querySelector('.title');
  return elemTitle.textContent;
}
console.log(getTitle());

export function getDescription() {
  const elemAbout = document.querySelector('.about');
  return elemAbout.innerText;
}
console.log(getDescription());

export function getPlans() {
  const elemPlans = document.querySelector('.plans');
  return elemPlans.innerHTML;
}
console.log(getPlans());

export function getGoal() {
  const elemGoal = document.querySelector('.goal');
  return elemGoal.outerHTML;
}
console.log(getGoal());
