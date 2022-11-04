const refs = {
  textEl:document.querySelector('#text'),
  inputEl: document.querySelector('#font-size-control'),
}
refs.inputEl.addEventListener('input', changeFontSize);
function changeFontSize(event) {
 refs.textEl.style.fontSize =event.currentTarget.value+'px' ;

}
console.log()
