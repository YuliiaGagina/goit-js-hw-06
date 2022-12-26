const textInputEl = document.querySelector('[id="validation-input"]');




textInputEl.addEventListener('blur', (event) => {
    const numberOfinputSigns = event.currentTarget.value.length;
    const numbers = textInputEl.getAttribute('data-length');
    if (numberOfinputSigns !== Number(numbers)) {
        textInputEl.classList.add('invalid');

    } else {
        textInputEl.classList.add('valid');
        textInputEl.classList.remove('invalid');

    }
   
});