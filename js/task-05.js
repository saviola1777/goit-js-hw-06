const refs = {
inputEl:document.querySelector('#name-input'),
output: document.querySelector('#name-output'),
}
refs.inputEl.addEventListener('input', onInputGange);
function onInputGange(event) {
  if (refs.inputEl.value === '') {
   refs.output.textContent = "Anonymous"
 } else{ 
 refs.output.textContent = event.currentTarget.value
} }
 //  refs.input.value === '' ? (refs.output.textContent = "Anonymous"): (refs.output.textContent = event.currentTarget.value)
