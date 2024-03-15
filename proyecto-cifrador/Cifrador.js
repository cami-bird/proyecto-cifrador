
//Función para encriptar el texto capturado del textarea//

function encriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
    }


// variable botón encriptar que captura la acción click sobre el botón y ejecuta la función encriptar//
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;


//Función para desencriptar el texto capturado del textarea de salida//

function desencriptar() {
    var texto = document.querySelector("#input-texto").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".text-input-salida").value = textoCifrado; document.querySelector("#input-texto").value;

}

//Variable del botón desencriptar que captura la acción click sobre el botón, ejecutando la función desencriptar//
var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

