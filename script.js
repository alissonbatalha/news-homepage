const menu = document.querySelector('.header__nav');

const openButton = document.querySelector('#open-button');
const closeButton = document.querySelector('#close-button');

openButton.addEventListener('click', () => {
  menu.style.right = 0;
});

closeButton.addEventListener('click', () => {
  menu.style.right = '-100vw';
});







