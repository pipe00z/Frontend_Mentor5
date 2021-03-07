// Variables

const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido  = document.getElementById('apellido');
const correo = document.getElementById('correo');
const password = document.getElementById('password');

// Listeners

formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    
        validarFormulario();

        setTimeout(() => {
            resetearFormulario();
        }, 3000);
});

// Funciones

function validarFormulario() {
    const valorNombre = nombre.value.trim();
    const valorApellido = apellido.value.trim();
    const valorCorreo = correo.value.trim();
    const valorPassword = password.value.trim();

    if(valorNombre === '') {
        mostrarError(nombre, 'First Name canoot be empty');
    } else {
        mostrarCorrecto(nombre)
    }

    if(valorApellido === '') {
        mostrarError(apellido, 'Last Name canoot be empty');
    } else {
        mostrarCorrecto(apellido)
    }

    if(valorCorreo === '' && !validarCorreo(correo.value)) { 
        console.log(valorCorreo)
        mostrarError(correo, 'Looks like this is not an email');
    } else {
        mostrarCorrecto(correo)
    }

    if(valorPassword === '') {
        mostrarError(password, 'password canoot be empty');
    } else {
        mostrarCorrecto(password)
    }
}

function mostrarError(input, mensaje) {
    const padre = input.parentElement;
    const parrafo = padre.querySelector('p');

    // agregar mensaje 
    parrafo.innerText = mensaje;

    // Añadiendo clases de error
    padre.className = 'grupo error';
}

function mostrarCorrecto(input) {
    const padre = input.parentElement;
    const parrafo = padre.querySelector('p');

    padre.className = 'grupo correcto';
    parrafo.innerText = '';
}

function validarCorreo(correo) {
    return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo)
}
function resetearFormulario() {
    formulario.reset();
}



