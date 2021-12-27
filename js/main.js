const card = document.querySelector('#card');

card.addEventListener('click', () => {
    card.classList.toggle('active'); //toggle agrega la clase active si no la tiene, o se la quita si sí la tiene.
});