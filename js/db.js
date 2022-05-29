const getJSON = async url => {
    try {
        const data = await fetch(url);
        const response = await data.json();  
        return response;
    }
    catch (e) {
        console.log(e);
    }
};

const adventure = getJSON('../db/adventure.json');
const attractions = getJSON('../db/attractions.json');
const shopping = getJSON('../db/shopping.json');
const cafes = getJSON('../db/cafes.json');
const hotels = getJSON('../db/hotels.json');
const pubs = getJSON('../db/pubs.json');
const restaurants = getJSON('../db/restaurants.json');
