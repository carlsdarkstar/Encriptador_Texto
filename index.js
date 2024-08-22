function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("nube");

  let textoCifrado = texto
    .replace(/a/gi, "jnn")
    .replace(/e/gi, "mrg")
    .replace(/i/gi, "zyr")
    .replace(/o/gi, "ymm")
    .replace(/u/gi, "zyl");

  if (texto.length !== 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.png";
  } else {
    muñeco.src = "./img/nube.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("nube");

  let textoCifrado = texto
    .replace(/jnn/gi, "a")
    .replace(/mrg/gi, "e")
    .replace(/zyr/gi, "i")
    .replace(/ymm/gi, "o")
    .replace(/zyl/gi, "u");

  if (texto.length !== 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptado.png";
  } else {
    muñeco.src = "./img/nube.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}
