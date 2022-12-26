function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  inputEl: document.querySelector('input'),
  createEl: document.querySelector('[data-create]'),
  destroyEl: document.querySelector('[data-destroy]'),
  boxForElements: document.querySelector('[id="boxes"]'),
}

refs.createEl.addEventListener('click', (e) => {
  createBoxes(refs.inputEl.value);

  
});
  
refs.destroyEl.addEventListener('click', (event) => {
  destroyBoxes();
});

 
function createBoxes(amount) {
   let width = 60;
for (let i = 0; i < amount; i += 1){  
    
  refs.boxForElements.innerHTML +=  `<div style="width:${width}px;height:${width}px;background-color:${getRandomHexColor()};"></div>`;
  width += 10;
};
};

function destroyBoxes() {
    refs.boxForElements.innerHTML = ' ';
    refs.inputEl.value = '';
   
}



