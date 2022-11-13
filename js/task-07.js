const refs = {
  textEl:document.querySelector('#text'),
  inputEl: document.querySelector('#font-size-control'),
}
 refs.textEl.style.fontSize =refs.inputEl.value+'px' ;
function changeFontSize(event) {
  refs.textEl.style.fontSize = `${event.currentTarget.value}px`
}
refs.inputEl.addEventListener('input', changeFontSize);
console.log()
