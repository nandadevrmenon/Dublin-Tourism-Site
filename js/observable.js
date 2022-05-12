'use strict'

let articles = Array.from(document.querySelectorAll('#home_page > main > section:last-child > article'));
let small = false;
const smallScreen = window.matchMedia("(max-width: 850px)");

const observerOptions = {
    root: null, 
    threshold: 0,
    rootMargin: "-300px"
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slide", entry.isIntersecting);
    })}, observerOptions);

articles.forEach(article => observer.observe(article));

// media queries
const smallScreenHandler = (mediaQuery) => {

    if (mediaQuery.matches) { 
        articles.forEach((article, index) => {
            if(index % 2 !== 0) {
                const paragraphs = document.createElement('div');
                const container = document.createElement('div');
                const div = article.children[1];
                const header = article.children[1].children[0];
                const p1 = article.children[1].children[1];
                const p2 = article.children[1].children[2];
                const button = article.children[1].children[3];
                const figure = article.children[0];

                paragraphs.appendChild(p1);
                paragraphs.appendChild(p2);
                container.appendChild(paragraphs);
                container.appendChild(figure);

                article.appendChild(header);
                article.appendChild(container);
                article.appendChild(button);
                div.remove();
            }
            else {
                const paragraphs = document.createElement('div');
                const container = document.createElement('div');
                const div = article.children[0];
                const header = article.children[0].children[0];
                const p1 = article.children[0].children[1];
                const p2 = article.children[0].children[2];
                const button = article.children[0].children[3];
                const figure = article.children[1];

                paragraphs.appendChild(p1);
                paragraphs.appendChild(p2);
                container.appendChild(paragraphs);
                container.appendChild(figure);

                article.appendChild(header);
                article.appendChild(container);
                article.appendChild(button);
                div.remove();
            }
        });
        small = true;
    }
    else {
        restoreArticles();
    }
}

const restoreArticles = () => {
    if(!small) return; 
    articles.forEach((article, index) => {
        const header = article.children[0];
        const p1 = article.children[1].children[0].children[0];
        const p2 = article.children[1].children[0].children[1];
        const figure = article.children[1].children[1];
        const button = article.children[2];
        const div = document.createElement('div');
        const newArticle = document.createElement('article');
        div.appendChild(header);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(button);

        if(index % 2 !== 0) {
            newArticle.appendChild(figure); 
            newArticle.appendChild(div); 
        }
        else {
            newArticle.appendChild(div); 
            newArticle.appendChild(figure); 
        }

        document.querySelector('#home_page > main > section:last-child').appendChild(newArticle);
    });

    for(let i = 0; i < 5; i++) articles[i].remove(); 
    articles = Array.from(document.querySelectorAll('#home_page > main > section:last-child > article'));
    articles.forEach(article => observer.observe(article));
    small = false;
}

smallScreenHandler(smallScreen);
smallScreen.addListener(smallScreenHandler);
