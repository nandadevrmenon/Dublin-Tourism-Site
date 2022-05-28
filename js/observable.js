'use strict'

let articles = Array.from(document.querySelectorAll('#home_page > main > section:last-child > article'));
let small = false;
const smallScreen = window.matchMedia("(max-width: 850px)");
const tinyScreen = window.matchMedia("(max-width: 500px)");

const observerOptions = {
    root: null, 
    threshold: 0,
    rootMargin: "-200px"
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slide", entry.isIntersecting);
    })}, observerOptions);

articles.forEach(article => observer.observe(article));

// media queries
const smallScreenHandler = (small, tiny) => {
    console.log(tiny);

    if (small.matches) { 
        smallLayout();
    }
    else if(tiny.matches) {
        small = true;
    }
    else {
        defaultLayout();
    }
}

const defaultLayout = () => {
    if(!small) return; 
    articles.forEach((article, index) => {
        const header = article.children[0];
        const p1 = article.children[1];
        const p2 = article.children[3];
        const figure = article.children[2];
        const button = article.children[4];
        const div = document.createElement('div');
        const newArticle = document.createElement('article');
        div.append(header, p1, p2, button);

        if(index % 2 !== 0) newArticle.append(figure, div);
        else newArticle.append(div, figure);
        document.querySelector('#home_page > main > section:last-child').appendChild(newArticle);
    });

    for(let i = 0; i < 5; i++) articles[i].remove(); 
    articles = Array.from(document.querySelectorAll('#home_page > main > section:last-child > article'));
    articles.forEach(article => observer.observe(article));
    small = false;
}

const smallLayout = () => {
    articles.forEach((article, index) => {
        console.log(index);
        if(index % 2 !== 0) {
            const header = article.children[1].children[0];
            const p1 = article.children[1].children[1];
            const p2 = article.children[1].children[2];
            const button = article.children[1].children[3];
            const figure = article.children[0];
            article.innerHTML = '';
            article.append(header, p1, figure, p2, button);
            console.log(article);
        }
        else {
            const header = article.children[0].children[0];
            const p1 = article.children[0].children[1];
            const p2 = article.children[0].children[2];
            const button = article.children[0].children[3];
            const figure = article.children[1];
            article.innerHTML = '';
            article.append(header, p1, figure, p2, button);
            console.log(article);
        }
    });
    small = true;
}

smallScreenHandler(smallScreen, tinyScreen);
smallScreen.addEventListener('change', smallScreenHandler);
