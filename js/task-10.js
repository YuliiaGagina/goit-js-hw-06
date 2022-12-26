function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  inputEl: document.querySelector('input'),
  createEl: document.querySelector('[data-create]'),
  destroyEl: document.querySelector('[data-destroy]'),
  boxForElements: document.querySelector('[id="boxes"]'),
}

// refs.createEl.addEventListener('click',createBoxes );
refs.inputEl.addEventListener('input', (event) => {
  const amount = event.currentTarget.value;
  
  refs.createEl.addEventListener('click', (e) => {
    createBoxes(amount);
    function createBoxes(amount) {
      let width = 60;
      for (let i = 0; i < amount; i += 1){

      refs.boxForElements.insertAdjacentHTML('afterbegin', `<div style="width:${width}px;height:${width}px;background-color: ${getRandomHexColor()};"></div>`);
        width -= 10;
    };
  };
  });
  destroyBoxes();
})

refs.destroyEl.addEventListener('click', (event) => {
  destroyBoxes();
 
  
}) 
 
function destroyBoxes() {
   refs.boxForElements.innerHTML = ' ';
}

    


// немного запуталась нужна помощь)
