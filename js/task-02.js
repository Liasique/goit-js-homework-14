const ingredientsArray = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.getElementById('ingredients');

const fragment = document.createDocumentFragment();

ingredientsArray.forEach(ingredient => {

    const liElement = document.createElement('li');
    
    liElement.textContent = ingredient;
    
    liElement.classList.add('item');
    
    fragment.appendChild(liElement);
});

ulElement.appendChild(fragment);
