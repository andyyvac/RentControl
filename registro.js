const formulario = document.querySelector("form");
const usuario = document.getElementById("usuario");

formulario.addEventListener("submit", function(){

    localStorage.setItem("tipoUsuario", usuario.value);

});