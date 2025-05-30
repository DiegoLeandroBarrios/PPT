const seccionBatalla = document.getElementById("campoBatalla");
const resultado = document.getElementById("Resultado");
const imgJugador = document.getElementById("imgJugador");
const imgPc = document.getElementById("imgPC");
const btnPiedra = document.getElementById("btnPiedra");
const btnPapel = document.getElementById("btnPapel");
const btnTijera = document.getElementById("btnTijera");

var opcionJugador;
var opcionPC;
var imagenJugador;
var imagenPC;

const imagenes = [
  {
    name: "Piedra",
    URL: "/img/Piedra.PNG",
  },
  {
    name: "Papel",
    URL: "/img/Papel.PNG",
  },
  {
    name: "Tijera",
    URL: "/img/Tijeras.PNG",
  },
];

function iniciar() {
  seccionBatalla.style.display = "none";
}
function numeroAleatorio() {
  let numero = Math.floor(Math.random() * 3);
  return numero;
}
function juego() {
  let aleatorio = numeroAleatorio();
  if (aleatorio === 0) {
    opcionPC = "Piedra";
  } else if (aleatorio === 1) {
    opcionPC = "Papel";
  } else if (aleatorio === 2) {
    opcionPC = "Tijera";
  }
  pelea();
}
btnPiedra.addEventListener("click", function () {
  opcionJugador = "Piedra";
  setTimeout(() => {
    juego();
    btnTijera.style.display = "";
    btnPapel.style.display = "";
    seccionBatalla.classList.remove("bounce");
  }, "500");
  seccionBatalla.classList.add("bounce");
  btnTijera.style.display = "none";
  btnPapel.style.display = "none";
});
btnPapel.addEventListener("click", function () {
  opcionJugador = "Papel";
  setTimeout(() => {
    juego();
    btnPiedra.style.display = "";
    btnTijera.style.display = "";
    seccionBatalla.classList.remove("bounce");
  }, "500");
  seccionBatalla.classList.add("bounce");
  btnPiedra.style.display = "none";
  btnTijera.style.display = "none";
});
btnTijera.addEventListener("click", function () {
  opcionJugador = "Tijera";
  setTimeout(() => {
    juego();
    btnPiedra.style.display = "";
    btnPapel.style.display = "";
    seccionBatalla.classList.remove("bounce");
  }, "500");
  seccionBatalla.classList.add("bounce");
  btnPiedra.style.display = "none";
  btnPapel.style.display = "none";
});
function pelea() {
  if (opcionJugador == opcionPC) {
    resultado.innerHTML = "EMPATE";
  } else if (opcionJugador == "Piedra" && opcionPC == "Papel") {
    resultado.innerHTML = "PERDISTE";
  } else if (opcionJugador == "Piedra" && opcionPC == "Tijera") {
    resultado.innerHTML = "GANASTE";
  } else if (opcionJugador == "Papel" && opcionPC == "Piedra") {
    resultado.innerHTML = "GANASTE";
  } else if (opcionJugador == "Papel" && opcionPC == "Tijera") {
    resultado.innerHTML = "PERDISTE";
  } else if (opcionJugador == "Tijera" && opcionPC == "Papel") {
    resultado.innerHTML = "GANASTE";
  } else if (opcionJugador == "Tijera" && opcionPC == "Piedra") {
    resultado.innerHTML = "PERDISTE";
  }
  addImagenes();
}

function addImagenes() {
  imagenes.forEach((objeto) => {
    if (opcionJugador == objeto.name) {
      imagenJugador = objeto.URL;
      console.log(imagenJugador);
      var insertar = `<img class="imgBatalla" src=${imagenJugador}>`;
      imgJugador.innerHTML = insertar;
    }
    if (opcionPC == objeto.name) {
      imagenPC = objeto.URL;
      console.log(imagenPC);
      var insertar = `<img class="imgBatalla" src=${imagenPC}>`;
      imgPc.innerHTML = insertar;
    }
  });

  seccionBatalla.style.display = "flex";
}
window.addEventListener("load", iniciar);
