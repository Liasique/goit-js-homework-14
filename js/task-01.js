const items = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const subItemsCount = item.querySelectorAll('ul > li').length;
    console.log(`\nCategory: ${title}`);
    console.log(`Elements: ${subItemsCount}`);
});
