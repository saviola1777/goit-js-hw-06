function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs ={
  bodyEl: document.querySelector('body'),
  colorEl: document.querySelector('.color'),
  buttonEl:document.querySelector('.change-color')
}
refs.bodyEl.addEventListener('click', changeColor);

function changeColor(event) {
  const randomColor = getRandomHexColor()
  refs.bodyEl.style.backgroundColor = randomColor;
  refs.colorEl.textContent=randomColor
}
console.log(getRandomHexColor())