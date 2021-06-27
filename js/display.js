export default class Display {
    constructor(moviesInfo, template, container) {
        this.moviesInfo = moviesInfo;
        this.template = template;
        this.container = container;
        this.fragment = new DocumentFragment();
        this.clone = this.template.cloneNode(true);
        this.cards = this.template.querySelector(".card")
    }

    displayDefaultCards() {
        let moviesImg = this.moviesInfo[0];
        let moviesTitle = this.moviesInfo[1];
        let moviesYear = this.moviesInfo[2];

        const imgArray = this.getNewArray(moviesImg);
        const titlerray = this.getNewArray(moviesTitle);
        const yearArray = this.getNewArray(moviesYear);

        this.container.forEach((row, i) => {
            i === 0 ? (moviesTitle = titlerray[0]) : (moviesTitle = titlerray[1])

            imgArray[i].forEach((movie, i) => {
                this.cards.children[0].setAttribute("src", `${movie}`);
                this.cards.children[1].children[0].innerText = moviesTitle[i];
                this.cards.children[1].children[1].innerText = moviesYear[i];

                this.clone = this.template.cloneNode(true);
                this.fragment.appendChild(this.clone);
            });

            row.appendChild(this.fragment);
        })
    }

    getNewArray(movies) {
        const left = movies
        const rigth = left.splice(0, Math.ceil(left.length / 2));
        return [left, rigth];
    }

    displayUsercards() {
        this.clearMovies();
        this.filterUserCards();
    }

    filterUserCards() {
        const sliceMovies = this.moviesInfo.slice(0, 6);
        
        sliceMovies.forEach(movie => {
            this.assingInfo(movie)

            this.clone = this.template.cloneNode(true)
            this.fragment.appendChild(this.clone);
        });
        this.container.appendChild(this.fragment);
        this.container.style.display = "flex";
    }

    assingInfo(movie){
       const newCardsImg = this.cards.children[0];
       const newCardsBody = this.cards.children[1];

       newCardsImg.setAttribute("src", `${movie.Poster}`);
       newCardsBody.children[0].innerText = movie.Title;
       newCardsBody.children[1].innerText = movie.Year;
    }

    clearMovies() {
        while (this.container.firstChild) {
            this.container.firstChild.remove();
        }
    }
}