const refs = {
    formEl: document.querySelector('.login-form'),
    inputElements: document.querySelectorAll('input'),
}

refs.formEl.addEventListener('submit', onFormData);

function onFormData(event) {
    event.preventDefault();

    refs.inputElements.forEach(input => {
        if (input.value === 0 || input.value === '') {
            alert('Все поля должны быть заполнены');
        }
    });
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        const userInfo = {
            value,
            name,
        }
        console.log(userInfo);
    });

    refs.formEl.reset();
}

