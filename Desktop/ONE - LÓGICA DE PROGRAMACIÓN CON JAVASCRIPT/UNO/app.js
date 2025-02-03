let numeroSecreto = 0;
console.log(numeroSecreto);
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numeroSecreto);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Adivinaste el número secreto ${numeroSecreto} en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'} `);

        document.getElementById('reiniciar').removeAttribute('disabled');
    // cuando el ususario no atina
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', `El número secreto es menor a ${numeroUsuario}`);
        }else{
            asignarTextoElemento('p', `El número secreto es mayor a ${numeroUsuario}`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Adivina el número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto(){

    if(listaNumerosSorteados.length == numeroMaximo){
        return asignarTextoElemento('p', 'Ya se sortearon todos los números posibles!');	
    }else{

        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        // console.log(listaNumerosSorteados);
        // console.log(numeroGenerado);
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

condicionesIniciales();


