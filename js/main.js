const card = document.querySelector('#card'),
      cardBtn = document.querySelector('#btnOpenForm'),
      cardForm = document.querySelector("#cardForm");

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