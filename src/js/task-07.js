const refs = {
    sizeControlEl: document.querySelector('[id="font-size-control"]'),
    textEl: document.querySelector('[ id="text"]'),
};

function changeTextOnInput (event){
    const amountOfInput = event.target.value
    refs.textEl.style.fontSize = amountOfInput + 'px';
}

refs.sizeControlEl.addEventListener('input',  changeTextOnInput);
