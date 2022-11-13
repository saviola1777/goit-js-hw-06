const refs = {
  inputEl:document.querySelector('#validation-input'), }
 refs.inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
  if (refs.inputEl.value.trim().length === Number(refs.inputEl.dataset.length)) {
    refs.inputEl.classList.add('valid')
    refs.inputEl.classList.remove('invalid')
  } else {
 refs.inputEl.classList.add('invalid')
 refs.inputEl.classList.remove('valid')
 } }






 // const input = document.querySelector('#validation-input');

// const onBlur = () => {
//   if (input.value.length === Number(input.dataset.length)) {
//     input.classList.add('valid')
//     input.classList.remove('invalid')
//   }else{ 
//   input.classList.remove('valid')
//   input.classList.add('invalid')
//   }
// }
// input.addEventListener('blur', onBlur);


