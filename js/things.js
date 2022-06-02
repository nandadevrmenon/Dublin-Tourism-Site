'use strict'

const urls = [
    // attractions
    "https://wallpaperset.com/w/full/f/5/b/16594.jpg",
    "https://cdn.wallpapersafari.com/57/76/JjHcV6.jpg",
    "https://www.solosophie.com/wp-content/uploads/2018/04/must_see_dublin_attractions-scaled.jpg",
    
    // adventure
    "https://ichef.bbci.co.uk/images/ic/1920x1080/p034p7qz.jpg",
    "https://wallpaperaccess.com/full/264026.jpg",
    "https://ww1.prweb.com/prfiles/2007/03/14/511753/mf05mr012ed.jpg",

    // getting around
    "https://wallpaperaccess.com/full/760542.jpg",
    "https://images5.alphacoders.com/680/680565.jpg",
    "https://www.buswells.ie/files-sbbasic/ba_buswells_ie/temple_bar_istock_000043917648_medium.jpg"
];


const imgContainers = document.querySelectorAll("#thingsTodo section > div:last-child div");

imgContainers.forEach((element, index) => {
    element.style.backgroundImage=`url(${urls[index]})`;
});
