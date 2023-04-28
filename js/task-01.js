const categories = document.querySelector('#categories')
console.log(`Number of categories: ${categories.childElementCount}`)
const categoriesEl = document.querySelectorAll('li.item')
categoriesEl.forEach((categor) => {
    console.log(`Category: ${categor.firstElementChild.textContent}`)
    console.log(`Elements: ${categor.lastElementChild.children.length}`)
});
