let menu = document.querySelector('.menu');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = () => {
    menu.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    menu.classList.remove('active');
    cartItem.classList.remove('active');
};

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    menu.classList.remove('active');
    searchForm.classList.remove('active');
};

window.addEventListener('click', (e) => {
    if (!e.target.closest('.menu') && !e.target.closest('#menu-btn')) {
        menu.classList.remove('active');
    }
    if (!e.target.closest('.search-form') && !e.target.closest('#search-btn')) {
        searchForm.classList.remove('active');
    }
});
window.onscroll = () =>{
    menu.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}