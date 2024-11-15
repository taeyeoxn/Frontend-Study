const modalWrapper = document.querySelector('.modal-wrapper');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

openButton.addEventListener('click', () => {
    modalWrapper.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modalWrapper.style.display = 'none';
})
