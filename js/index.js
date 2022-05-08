const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log(entry)
    }, {})

});

console.log(observer);
