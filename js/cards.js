import Request from './request.js';


export default class Cards {
    // Extrae los datos del JSON
    async getMoviesExample() {
       const response = await fetch("/exampleDB.json");
       const json = await response.json();


       this.getImages(json)
    }

    // Obtenemos las imagenes y las enviamos al arreglo

    getImages(json) {
        const values = Object.values(json);
        const imgArray = [];

        while(imgArray.length <= 11) {
            let item =  this.newItem(values);

            imgArray.push(item);
        } 

        const request = new Request();
        request.getMultipleInfo(imgArray);
    }

    //Elegimos aleatoriamente del json

    newItem(values){
        const item = values[Math.floor(Math.random() * values.length)]
        return item;
    }

}