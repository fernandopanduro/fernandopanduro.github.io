/* Menu HAMBURGUESA */

//Click en el menu para activar la funcion
document.querySelector(".bars__menu").addEventListener("click" , animateBars);



var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector(".container__menu");


//Inicializar la funcion
function animateBars() {
    //Intercala entre los distintas clases del bars menu
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    //Intercala entre los dirversos estados del contener del menu desplegable
    container__menu.classList.toggle("activecontainer__menu");
}
