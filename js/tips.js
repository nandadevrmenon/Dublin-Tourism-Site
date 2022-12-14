'use strict'

const section = document.querySelector("#tips");
const tips = [
    { "id": 0, "title": "The Stops on the Dublin Coastal Trail", "desc": "Dublin's a city by the sea, and the Dublin Coastal Trail makes it easy to explore our seaside towns. Here are 11 stops worth diving into including the best beach walks in Dublin.", "page": "coastal_trail.html" },
    { "id": 1, "title": "Discover the Best Dublin Staycation Deals", "desc": "You might be busy delving into 'things to do' articles, booking attractions and dreaming of Dublin activities to try on an upcoming visit, but first things first — where to stay on your getaway? You're spoilt for choice.", "page": "staycation_deals.html" },
    { "id": 2, "title": "Family Fun in Dublin", "desc": "For those thirsty for fun and exciting experiences, there are amazing activities for all ages waiting to be enjoyed.", "page": "family_fun.html" },
    { "id": 3, "title": "Discover Dublin on Four Scenic Cycle Route", "desc": "Dublin has a choice of cycle routes that take you from bustling city streets to tranquil canalways or green open spaces in a matter of minutes.", "page": "cycle_routes.html" },
    { "id": 4, "title": "10 Great Spots to Visit in Dublin", "desc": "You may think you know Dublin, but how many places have you really been to? It’s time to experience the hidden gems of the capital.", "page": "great_spots.html" },
    { "id": 5, "title": "Outdoor Dublin: City Parks & Nature Spots separator", "desc": "For the foreseeable future, outdoor adventures reign supreme.", "page": "outdoors.html" },
    { "id": 6, "title": "10 Things to Do on St Patrick’s Weekend in Dublin", "desc": "Whether you want to dance the night away at a gig or enjoy a meditative sound bath at a wellness festival, here are some of the best ways to enjoy the bumper bank holiday weekend.", "page": "weekend_plan.html" },
    { "id": 7, "title": "Roz Purcell's Tour", "desc": "From food so good you could be in New York to a tour of the largest church in Ireland, a visit to Dublin will always surprise you.", "page": "roz_purcell.html" }
];

tips.forEach(entry => {
    const imgContainer = document.createElement('article'); 
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const anchor = document.createElement('a');
    const span = document.createElement('span');

    // imgContainer.style.backgroundImage=`url(images/tips/${entry["id"]}.jpg)`;
    h3.textContent = entry["title"];
    p.textContent = entry["desc"];
    span.innerHTML = "&#187;"
    anchor.href=`pages/tips/${entry["page"]}`;
    anchor.classList.toggle("styled_btn");
    anchor.textContent = "see more";
    anchor.appendChild(span);

    imgContainer.append(h3, p, anchor);
    section.appendChild(imgContainer);
});

