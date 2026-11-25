const perfil = document.querySelector("#visualizarPerfil")
perfil.addEventListener("click", function () {
alert("Estas Viendo Mi Perfil");
});

let usuario1 = 0;
const numero1 = document.querySelector("#numlike1");
const btnSumar1 = document.querySelector("#btnlike1");
btnSumar1.addEventListener("click", function () {
usuario1 = usuario1 + 1;
numero1.innerText = usuario1 + " like(s)";
});

let usuario2 = 0;
const numero2 = document.querySelector("#numlike2");
const btnSumar2 = document.querySelector("#btnlike2");
btnSumar2.addEventListener("click", function () {
usuario2 = usuario2 + 1;
numero2.innerText = usuario2 + " like(s)";
});

//Usuario3
let usuario3 = 0;
// Apodamos los id para js
const numero3 = document.querySelector("#numlike3");
const btnSumar3 = document.querySelector("#btnlike3");
// Sumar al hacer Click
btnSumar3.addEventListener("click", function () {
usuario3 = usuario3 + 1;
numero3.innerText = usuario3 + " like(s)";
});