const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elementUl = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i += 1) {
  const liElement = document.createElement('li');
  liElement.textContent = ingredients[i];
  liElement.classList.add('item');
 
  elementUl.append(liElement)
}
 console.log(elementUl)


