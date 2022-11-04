
const refs = {
decrementBtn:document.querySelector('button[data-action="decrement"]'),
incrementBtn: document.querySelector('button[data-action="increment"]'),
valueEl:document.querySelector('#value'),

}

const counter = {
  value: 0,
  incremenAdd() {
  this.value+=1
  }, 
  decrementRemove() {
  this.value-=1
}  
}
refs.incrementBtn.addEventListener('click', () => {
  counter.incremenAdd();
  refs.valueEl.textContent=counter.value
});
refs.decrementBtn.addEventListener('click', () => {
  counter.decrementRemove();
  refs.valueEl.textContent=counter.value
});


