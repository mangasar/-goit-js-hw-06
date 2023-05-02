const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elem = ingredients.map((ingredient) => {
const ElLi = document.createElement('li')
ElLi.textContent = ingredient;
ElLi.classList.add('item')

 return ElLi;
 
});

const listEl = document.querySelector('ul#ingredients')

listEl.append(...elem)

