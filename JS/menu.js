// 漢堡選單展開
const hamBtn = document.querySelector('.ham-btn');
const menu = document.querySelector('.mb-menu');
const shadow = document.querySelector('.shadow');
const closeMenu = document.querySelector('.close-menu');
const lis = menu.querySelectorAll('li');
const funBox = menu.querySelector('.func-box');

hamBtn.addEventListener('click', () => {
    menu.classList.toggle('act');
});

closeMenu.addEventListener('click', () => {
    menu.classList.toggle('act');
});

shadow.addEventListener('click', () => {
    menu.classList.toggle('act');
});

lis.forEach((l) =>
    l.addEventListener('click', () => {
        menu.classList.toggle('act');
    })
);

funBox.addEventListener('click', () => {
    menu.classList.toggle('act');
});
