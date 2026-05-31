const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const tipoUsuario = localStorage.getItem("tipoUsuario");

    if(tipoUsuario === "arrendador"){
        window.location.href = "arrendador.html";
    }
    else{
        window.location.href = "inquilino.html";
    }

});