import Checker from "./checker.js";
import Display from "./display.js";


export default class Request {
    constructor() {
        this.template = document.querySelector(".card-template").content;

    }

    async getInfo(inputTexto) {
       try {
        const url = `https://www.omdbapi.com/?s=${inputTexto}&apikey=22188f0`
        const response = await fetch(url);
        const json = await response.json();

        const container = document.querySelector(".new-row");

        const display = new Display(json.Search, this.template, container);
        display.displayUsercards();
       } catch (error) {
           const checker = new Checker();
           checker.getErrorContainer("Pelicula no encontrada!")
       }
    }


    // Obtenemos el arreglo con las promesas
    getMultipleInfo(nombrePeliculas) {
        const moviesInfo = [
            [],
            [],
            []
        ];
        const result = nombrePeliculas.map((item) => {
            return new Promise(async (resolve) => {
                try {
                    const url = `https://www.omdbapi.com/?t=${item}&apikey=22188f0`
                    const response = await fetch(url);
                    const json = await response.json();

                    moviesInfo[0].push(json.Poster);
                    moviesInfo[1].push(json.Title);
                    moviesInfo[2].push(json.Year);


                    resolve();

                } catch (error) {
                    console.log(error);
                }
            });
        });
        Promise.all(result).then(() => {
            const container = document.querySelectorAll(".default-row");
            const display = new Display(moviesInfo, this.template, container);
            display.displayDefaultCards();
        })
    }
}