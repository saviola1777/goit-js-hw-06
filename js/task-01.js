const categoriesList= document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`)

const all = [...categoriesList].map(categories => { 
console.log(`Category:${categories.firstElementChild.textContent}`)
console.log(`Elments:${categories.lastElementChild.children.length}`)
})




// categoriesList.forEach(categories => {
// console.log(`Category:${categories.firstElementChild.textContent}`)
// console.log(`Elments:${categories.lastElementChild.children.length}`)
//  } )


