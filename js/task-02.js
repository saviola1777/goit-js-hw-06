const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elementUl = document.querySelector('#ingredients');
const addEl = ingredients.map(ingredient => `<li class='item'> ${ingredient}</li>`).join(""); 
elementUl.insertAdjacentHTML('beforeend', addEl);
console.log(elementUl)



