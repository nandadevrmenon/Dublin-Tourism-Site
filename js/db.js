let db = [];
const urls = [
    '../db/adventure.json',
    '../db/attractions.json',
    '../db/shopping.json',
    '../db/cafes.json',
    '../db/hotels.json',
    '../db/pubs.json',
    '../db/restaurants.json'
];

urls.forEach(url => {
    fetch(url)
        .then(response => response.json())
        .then(json => db.push(json));
});


