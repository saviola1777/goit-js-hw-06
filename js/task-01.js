const cat= document.querySelectorAll('.item');
console.log('categories: ', cat );

let objectCateg = 1;
cat.forEach(element => {
  console.log('objectCateg: ', objectCateg , element);
  objectCateg += 1;  
});

