//animacion menú
const navMenu = document.querySelector('.nav-menu');
const togger = document.querySelector('.togger img');
let body = document.querySelector('.body');

togger.addEventListener('click',()=>{
    if(navMenu.classList.contains('nav-menu_visible')){
        navMenu.classList.remove('nav-menu_visible');
        body.style.overflow = 'initial';
        togger.style.filter = 'invert(1)';
    }else{
        navMenu.classList.add('nav-menu_visible');
        body.style.overflow = 'hidden';
        togger.style.filter = 'none';
    }
});
