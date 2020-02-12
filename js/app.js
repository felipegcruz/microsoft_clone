// document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

document.querySelector('.menu-btn').addEventListener('click', function (e) {
    document.querySelector('.main-menu').classList.toggle('show');
    document.querySelector('.fa-bars').classList.toggle('menu-btn-noshow');
    document.querySelector('.fa-times').classList.toggle('menu-btn-x-show');

    e.preventDefault();
})