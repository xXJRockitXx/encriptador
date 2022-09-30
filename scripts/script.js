var texto = document.querySelector(".texto");

var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var btnCopiar = document.querySelector(".btn-copiar");

var resultado = document.querySelector(".resultado");
resultado.disabled = true;

btnEncriptar.onclick = function () {
    /* Este es el boton que realizará la encriptación del texto */
    resultado.style.cssText = "background-image: none;";
    resultado.value = encriptar(texto.value);
}

function encriptar(texto) {
    /* Aqui se hace la magia, vamos a recorrer cada letra del texto ingresado
    y la iremos copiando en una nueva cadena. La encriptación dependerá de cada vocal */
    var encriptado = "";

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                encriptado += "enter"
                break;

            case 'i':
                encriptado += "imes"
                break;

            case 'a':
                encriptado += "ai"
                break;

            case 'o':
                encriptado += "ober"
                break;

            case 'u':
                encriptado += "ufat"
                break;

            default:
                encriptado += texto[i];
                break;
        }
    }

    return encriptado;
}

btnDesencriptar.onclick = function () {
    resultado.value = desencriptar(texto.value);
    resultado.style.cssText = "background-image: none;";
}

function desencriptar(texto) {
    if (texto.includes("enter")) {
        texto = reemplazarCadena("enter", "e", texto);
    }

    if (texto.includes("imes")) {
        texto = reemplazarCadena("imes", "i", texto);
    }

    if (texto.includes("ai")) {
        texto = reemplazarCadena("ai", "a", texto);
    }

    if (texto.includes("ober")) {
        texto = reemplazarCadena("ober", "o", texto);
    }

    if (texto.includes("ufat")) {
        texto = reemplazarCadena("ufat", "u", texto);
    }

    return texto;
}

function reemplazarCadena(cadenaVieja, cadenaNueva, cadenaCompleta) {
    // Reemplaza cadenaVieja por cadenaNueva en cadenaCompleta
    for (var i = 0; i < cadenaCompleta.length; i++) {
        if (cadenaCompleta.substring(i, i + cadenaVieja.length) == cadenaVieja) {
            cadenaCompleta = cadenaCompleta.substring(0, i) + cadenaNueva + cadenaCompleta.substring(i + cadenaVieja.length, cadenaCompleta.length);
        }
    }

    return cadenaCompleta;
}

btnCopiar.onclick = function () {
    /* Este es el botón Copiar, al hacer click en él se copiará el texto 
    del textarea */
    resultado.select();
    document.execCommand('copy');
    resultado.style.cssText = "background-image: url('imagenes/john_travolta.gif');";
    resultado.value = "";
    texto.value = "";
}
