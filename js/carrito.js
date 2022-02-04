const contenedorCarrito = document.querySelector('#lista-carrito');
const vaciarCarrito = document.querySelector('.delete-cart-button');
const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('.button-4');
const button5 = document.querySelector('.button-5');
const button6 = document.querySelector('.button-6');
const total = document.querySelector('.total');
const buttonDelete = document.querySelector('.delete-cart-button');
let articulosCarrito = [];
let suma =0;


cargarEventListeners();
function cargarEventListeners(){
    button1.addEventListener('click',agregarProducto);
    button2.addEventListener('click',agregarProducto);
    button3.addEventListener('click',agregarProducto);
    button4.addEventListener('click',agregarProducto);
    button5.addEventListener('click',agregarProducto);
    button6.addEventListener('click',agregarProducto);
    buttonDelete.addEventListener('click',BorrarCarrito);
}


function agregarProducto(e){
    const productoSelecionado = e.target.parentElement;
    console.log(productoSelecionado);
    leerDatosProductos(productoSelecionado);

}

function leerDatosProductos(producto){
    const infoProducto = {
        img:producto.querySelector('.grid-cards-shop article img').src,
        nombre:producto.querySelector('.name').textContent,
        precio:producto.querySelector('.price').textContent,
        id:producto.querySelector('button').getAttribute('data-id'),
        cantidad:1
    }
    /* console.log(infoProducto); */

    existe = articulosCarrito.some(producto => producto.id === infoProducto.id);

    if(existe){
        const productos = articulosCarrito.map(producto =>{
            if(producto.id === infoProducto.id){
                return producto.cantidad++;
            }else{
                return producto;
            }
        })
    }else{
        articulosCarrito = [...articulosCarrito,infoProducto]
    }

    /* console.log(articulosCarrito); */
    carritoHTML()
}

function carritoHTML(){
    limpiarHTML();
    articulosCarrito.forEach(producto =>{
        const{img,nombre,precio,cantidad,id} = producto;
        const row = document.createElement('tr');
        row.innerHTML = `<td> <img src="${img}" width="80"></td>
                         <td> ${nombre} </td>
                         <td> ${precio} </td>
                         <td> ${cantidad} </td>`;


        contenedorCarrito.appendChild(row);

        


    })


    
}

function BorrarCarrito(){
    articulosCarrito = [];
    total.textContent = '';
    carritoHTML();
}

function limpiarHTML(){
    //forma lenta
    /* contenedorCarrito.innerHTML = ''; */
    //forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

