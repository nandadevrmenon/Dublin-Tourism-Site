'use strict'
const decoration = document.querySelector('#home_page > main > section:first-child > div:first-child');
const decorationElement = document.querySelector('#home_page > main > section:first-child > div:last-child');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting)
        entry.target.classList.toggle('inverse');
    }, {
        root: null,
        threshold: 1,

    })
});

observer.observe(decorationElement);
