const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.querySelector('#ingredients');

const engredientsMarkup = ingredients.map(ingredient =>{
 const element = document.createElement('li');
  element.classList.add('item');
   element.textContent = ingredient
 
  return element
})


ingredientsElement.append(...engredientsMarkup);




