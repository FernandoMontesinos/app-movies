import Checker from "./checker.js";
import Carrusel from "./carrusel.js";
import Cards from "./cards.js";

window.addEventListener("DOMContentLoaded", () => {
    const btnSubmit = document.querySelector(".btn-search");

    const cards = new Cards(); 
    const carrusel = new Carrusel();


    carrusel.mostrarTextoCarrusel();
    cards.getMoviesExample();

    btnSubmit.addEventListener("click", (e) => {
       e.preventDefault();

       const checker = new Checker();
       checker.verifyInput();
    })
})

