const nameForm = document.querySelector('#name');
const message = document.querySelector('#textarea');
const buttonForm = document.querySelector('.button-form');
const containerForm = document.querySelector('.container-error');
const form = document.querySelector('#form');
const buttonChecked = document.querySelector('#check');
const windowMessage = document.querySelector('.window');
const black = document.querySelector('.main-contact-form');
const blackDiv = document.querySelector('.div-black');
let aciertos = 0;
let count =0;

nameForm.addEventListener('blur',validarNombre);
message.addEventListener('blur',validarTextTarea);
buttonChecked.addEventListener('change',validarChecked);
buttonForm.addEventListener('click',enviarForm);

function validarNombre(){
    const nameFormValue = nameForm.value;
    if(nameFormValue.length <= 2){
        error('The Name is not Correct');
        nameForm.style.border = '3px solid red';
        form.reset();
        
    }else{
        nameForm.style.border = '3px solid #78ff4b';
        aciertos++;
        console.log(aciertos);
    }
}

function validarTextTarea(){
    const messageValue= message.value;
    if(messageValue.length < 5){
        error('Your Text is Too Short');
        message.style.border = '3px solid red';
        form.reset();
        aciertos =0;

    }else{
        message.style.border = '3px solid #78ff4b';
        aciertos++;
        console.log(aciertos);
    }
}

function validarChecked(){
    count++;
    if(count %2 != 0){
        aciertos++;
        console.log(aciertos);
    }else{
        error('You are not Sure?');
        aciertos =0;
        form.reset();

    }
}

function enviarForm(){
    if(aciertos<3){
        error('Your Fields Were not Filled out Correctly');
        form.reset();
    }else if(aciertos >=3){
        console.log('hecho')
        mostrarVentana();
    }

    
}



function error(mensaje){
    limpiarHTML();
    parrafo = document.createElement('P');
    parrafo.classList.add('error');
    parrafo.textContent = mensaje;
    containerForm.appendChild(parrafo);

    setTimeout( ()=>{
        parrafo.classList.remove('error');
        parrafo.textContent = '';
        nameForm.style.border = '1px solid #fffbf7';
        message.style.border = '1px solid #fffbf7';
    },3200);
}


function limpiarHTML(){
    while(containerForm.firstChild){
        containerForm.removeChild(containerForm.firstChild);
    }
}

function mostrarVentana(){
    windowMessage.classList.add('window_visible');
    black.style.backgroundColor = 'rgb(53, 51, 51)';
    blackDiv.style.backgroundColor = 'rgb(53, 51, 51)';
    
    setTimeout( ()=>{
        windowMessage.classList.remove('window_visible');
        black.style.backgroundColor = '#2f2f3d';
        blackDiv.style.backgroundColor = '#ffff';
        nameForm.style.border = '1px solid #fffbf7';
        message.style.border = '1px solid #fffbf7';
        form.reset();
    },3000);
}