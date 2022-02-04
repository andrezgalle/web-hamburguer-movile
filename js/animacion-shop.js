const windowMessage = document.querySelector('.window');
const buttonPay = document.querySelector('.pay-cart-button');
const articles = document.querySelectorAll('.grid-cards-shop article');
const black = document.querySelector('.div-black');
const totalWindow = document.querySelector('.total-window');


buttonPay.addEventListener('click',mostrarVentana);

function mostrarVentana(){
    for (let i = 0; i < articulosCarrito.length; i++) {
        suma = suma+ (parseFloat(articulosCarrito[i].precio)*parseInt(articulosCarrito[i].cantidad));
        total.textContent = suma.toFixed(2);
    }
    console.log(suma);
    windowMessage.classList.add('window_visible');
    black.style.backgroundColor = 'rgb(53, 51, 51)';
    totalWindow.textContent = suma.toFixed(2);
    articles.forEach((article) =>{
        article.style.backgroundColor = 'rgb(53, 51, 51)';
    } );


    
    setTimeout( ()=>{
        windowMessage.classList.remove('window_visible');
        black.style.backgroundColor = '#fffbf7';
        articles.forEach((article) =>{
            article.style.backgroundColor = '#fffbf7';
        } );
        articulosCarrito = [];
        suma =0;
        carritoHTML();
        total.textContent = '';
    },3000);
}
