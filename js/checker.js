import Request from './request.js';


export default class Checker {
    verifyInput() {
        const inputTexto = document.querySelector(".my-input");

        if(inputTexto.value === '' ) {
            this.getErrorContainer('Introduce una película');
        } else {
            const request = new Request();
            request.getInfo(inputTexto.value);

            inputTexto.value = "";
        }
    }

    getErrorContainer(errorMensaje) {
        const fragment = new DocumentFragment();
        const errorContainer = document.querySelector(".error-container");
        const errorTemplate = document.querySelector(".error-template").content;

        const clone = errorTemplate.cloneNode(true);
        fragment.appendChild(clone);

        errorContainer.appendChild(fragment);

        document.querySelector(".alert-error").innerText = errorMensaje;
        this.displayError(errorContainer);
    }

    displayError(errorContainer){
        errorContainer.style.display = "block";
        
        setTimeout(() => {
            errorContainer.style.display = "none";

            while(errorContainer.firstChild) {
                errorContainer.firstChild.remove();
            }
        }, 1500)
    }
}