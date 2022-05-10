'use strict'

const articles = document.querySelectorAll('home_page > main > section:last-child > article')
const observerOptions = {
    root: null,
    threshold: 0
}

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    console.log(entry.target);
    }, observerOptions));

articles.forEach(observer.observe);





