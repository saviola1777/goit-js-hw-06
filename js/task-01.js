const categoriesList= document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`)

categoriesList.forEach(categories => {
  const categoriesTitle = categories.querySelector('h2');
  const categoriesItem = categories.querySelectorAll('li');
  console.log(`Category:${categoriesTitle.textContent}`)
  console.log(`Elments:${categoriesItem .length}`)
} )
