const card = document.querySelector('#card'),
      cardBtn = document.querySelector('#btnOpenForm'),
      cardForm = document.querySelector("#cardForm"),
      cardNumber = document.querySelector('#card .card__number'),
      cardName = document.querySelector('#card .card__name'),
      logoBrand = document.querySelector('#logoBrand'),
      signature = document.querySelector('#signature .card__signature p');

//Volteamos la tarjeta para mostrar el frente.
const showFrontside = () => {
    if (card.classList.contains('active')) {
        card.classList.remove('active');
    }
}

//Rotación de la tarjeta
card.addEventListener('click', () => {
    card.classList.toggle('active'); //toggle agrega la clase active si no la tiene, o se la quita si sí la tiene.
});

//Botón de abrir formulario
cardBtn.addEventListener('click', () => {
    cardBtn.classList.toggle('active');
    cardForm.classList.toggle('active');
});

//Rellenar select del mes de manera dinámica
for (let i = 1; i <= 12; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    cardForm.monthSelect.appendChild(option);
}

//Rellenar select del año de manera dinámica
const currentYear = new Date().getFullYear();
for (let i = currentYear; i <= currentYear + 8; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    cardForm.yearSelect.appendChild(option);
}

//Input número de tarjeta
cardForm.inputNumber.addEventListener('keyup', (e) => { //Con keyup, una vez se suelta la tecla se ejecuta la función.
    let inputValue = e.target.value;

    cardForm.inputNumber.value = inputValue
    .replace(/\s/g, '') //Elimina los espacios con esta expresión regular.
    .replace(/\D/g, '') //Elimina las letras.
    .replace(/([0-9]{4})/g, '$1 ') //Agrega un espacio cada 4 caracteres.
    .trim(); //Elimina el último espacio.


    cardNumber.textContent = inputValue;

    if (inputValue == '') {
        cardNumber.textContent = '#### #### #### ####';
        logoBrand.innerHTML = '';
    }

    if (inputValue[0] == 4) {
        logoBrand.innerHTML = '';
        const image = document.createElement('img');
        image.src = 'img/logos/visa.png';
        logoBrand.appendChild(image);
    } else if (inputValue[0] == 5) {
        logoBrand.innerHTML = '';
        const image = document.createElement('img');
        image.src = 'img/logos/mastercard.png';
        logoBrand.appendChild(image);
    }
    
    showFrontside(); //Volteamos la tarjeta para que el usuario vea el frente.
});

//Input nombre de tarjeta
cardForm.inputName.addEventListener('keyup', (e) => {
    let inputValue = e.target.value;

    cardForm.inputName.value = inputValue
    .replace(/\d/g, ''); //Elimina los números.

    cardName.textContent = inputValue;
    signature.textContent = inputValue;

    if (inputValue == '') {
        cardName.textContent = 'John Doe';
    }

    showFrontside();
});