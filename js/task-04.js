const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueinintialize: document.querySelector('[id="value"]'),
}


let counterValue = 0;
refs.incrementBtn.addEventListener('click', () =>{
     counterValue += 1;
    refs.valueinintialize.innerHTML =  counterValue;
});
refs.decrementBtn.addEventListener('click', () =>{
    counterValue -= 1;
     refs.valueinintialize.innerHTML = counterValue;
})

