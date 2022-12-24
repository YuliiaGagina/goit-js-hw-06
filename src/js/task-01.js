// 1
const collectionIteamEl = document.querySelectorAll('.item');
const numberOfItemElements = [...collectionIteamEl].length;
console.log(`Number of categories: ${numberOfItemElements}`);

// 2, 3

const categoruItems = [...collectionIteamEl];
const colectionOfEl = document.querySelectorAll('.item > ul');
const realColectionOfEl = [...colectionOfEl];

categoruItems.map(item => {
    console.log(`Categories: ${item.firstElementChild.textContent} \n Elements: ${item.lastElementChild.children.length}`); 
});












