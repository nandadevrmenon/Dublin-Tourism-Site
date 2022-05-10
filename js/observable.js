'use strict'

const articles = document.querySelectorAll('#home_page > main > section:last-child > article')
const observerOptions = {
    root: null, 
    threshold: 0,
    rootMargin: "-300px"
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("slide", entry.isIntersecting);
    })
}, observerOptions);

articles.forEach(article => observer.observe(article));





