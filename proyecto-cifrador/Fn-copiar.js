//Creación de función para copiar el texto en la TextArea//

function copiarTexto() {
    var texto = document.getElementById("msg");
    texto.select();

    document.execCommand("copy");
    alert("Copiado al portapapeles");


}