const card = document.querySelector('#card'),
      cardBtn = document.querySelector('#btnOpenForm'),
      cardForm = document.querySelector("#cardForm");

card.addEventListener('click', () => {
    card.classList.toggle('active'); //toggle agrega la clase active si no la tiene, o se la quita si sí la tiene.
});

cardBtn.addEventListener('click', () => {
    cardBtn.classList.toggle('active');
    cardForm.classList.toggle('active');
});