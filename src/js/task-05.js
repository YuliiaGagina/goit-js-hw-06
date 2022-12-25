const refs = {
    userNameInputEl: document.querySelector('[id="name-input"]'),
    userNameEl: document.querySelector('[id="name-output"]'),
}

refs.userNameInputEl.addEventListener('input', (e) => {
    const name = e.currentTarget.value;
    refs.userNameEl.innerHTML = name;
   if (name === 0 || name === '' ) {
        refs.userNameEl.innerHTML = 'Anonymous';
    }
    return refs.userNameEl.innerHTML;
})