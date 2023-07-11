// Crear 3 parrafos con javascript

// Crear un enlace con javascript

// Crear una lista desordenada de elementos con javascript

function init() {
  let contenedor = document.getElementById("contenedor");

  // agregar parrafos

  let p1 = document.createElement("p");
  let p1Texto = document.createTextNode("Hola Mundo");
  p1.appendChild(p1Texto);
  contenedor.appendChild(p1);

  let p2 = document.createElement("p");
  let p2Texto = document.createTextNode("Hola Mundo");
  p2.appendChild(p2Texto);
  contenedor.appendChild(p2);

  let p3 = document.createElement("p");
  let p3Texto = document.createTextNode("Hola Mundo");
  p3.appendChild(p3Texto);

  contenedor.appendChild(p3);

  //enlace

  let enlace = document.createElement("a");

  enlace.setAttribute("href", "https://www.google.com/");
  enlace.setAttribute("target", "_blank");

  let enlaceTexto = document.createTextNode("enlace");
  enlace.appendChild(enlaceTexto);

  contenedor.appendChild(enlace);

  //lista desordenada

  let lista = document.createElement("ul");

  for (let i = 1; i < 10; i++) {
    let li = document.createElement("li");
    let liTexto = document.createTextNode("elemento " + i);
    li.appendChild(liTexto);
    lista.appendChild(li);
  }

  contenedor.appendChild(lista);
}

window.onload = init;
