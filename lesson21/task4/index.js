export const getTitle = () => {
  const elemTitle = document.querySelector('.title');
  return elemTitle.textContent;
};
console.log(getTitle());

export const getDesription = () => {
  const elemAbout = document.querySelector('.about');
  return elemAbout.innerText;
};
console.log(getDesription());

export const getPlans = () => {
  const elemPlans = document.querySelector('.plans');
  return elemPlans.innerHTML;
};
console.log(getPlans());

export const getGoal = () => {
  const elemGoal = document.querySelector('.goal');
  return elemGoal.outerHTML;
};
console.log(getGoal());
