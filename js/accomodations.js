'use strict'
const loadElements = (pageID, arr) => {
    const container = document.querySelector(pageID);
    arr.forEach(entry => { const section = document.createElement("section");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const anchor = document.createElement('a');
        // anchor.href = `https://duckduckgo.com/?q=\\${entry["name"]}+dublin&t=h_&ia=web`;
        anchor.href = `https://www.google.ie/maps/search/'${entry["name"]}'/`;
        h3.textContent = entry["name"];
        img.src = `images/accomodations/${entry["id"]}.jpg`;
        anchor.appendChild(h3);
        p.textContent = entry["desc"]; section.append(img, anchor, p);
        container.appendChild(section);
    });
}

const accomodations = [
    {"id": 0, "name": "Aspect Hotel Dublin Parkwest", "desc": "Aspect Hotel Dublin Parkwest is located within the Park West Business Campus, just a short distance from Dublin City Centre and many other corporate estates. The four-star hotel offers friendly service, and comfortable guest bedrooms and suites." },
    {"id": 1, "name": "Conrad Dublin", "desc": "The five star Conrad Dublin is located in the heart of Dublin City, just 12km from Dublin Airport. Hotel facilities comprise 191 guest rooms including 15 suites, nine conference rooms and a selection of banqueting rooms." },
    {"id": 2, "name": "McGettigan's Townhouse", "desc": "McGettigan's Townhouse is a seven bedroom townhouse in the heart of Dublin City. The townhouse is a home away from home and is run in conjunction with McGettigan's Pub." },
    {"id": 3, "name": "King Sitric Guesthouse", "desc": "Situated at picturesque Howth Harbour in Dublin, King Sitric Restaurant and Guesthouse has a reputation for excellent seafood and quality accommodation, just 20 minutes from Dublin's City Centre and Dublin Airport."},
    {"id": 4, "name": "Kelly's Hotel", "desc": "Kelly's Hotel Dublin, is the sharpest new urban hotel in the heart of Dublin's city centre. Brought to you by the same mindset that has created some of Dublin's most popular bar and restaurant environments, Kelly's Hotel Dublin is cool yet affordable"},
    {"id": 5, "name": "Aghadoe House", "desc": "A warm and friendly atmosphere awaits you in our lovely Edwardian townhouse located 2 miles from Dublin's O'Connell Street and 4 minutes walk to the National Botanic Gardens. Good regular bus service from house to City Centre"},
    {"id": 6, "name": "Charleville Lodge", "desc": "Charleville Lodge (former home of Lord Charleville), is an elegant terrace of Edwardian Houses located minutes from the city centre, Trinity College, Temple Bar, en route to Dublin Airport and car ferry."},
    {"id": 7, "name": "San Augustine", "desc": "Detached, modern, Georgian-style town house. Five minutes walk to Main Street, Swords village, with pubs, shopping centre, restaurants and castle. On Bus route to airport and city centre."},
    {"id": 8, "name": "Charleville Lodge", "desc": "Charleville Lodge (former home of Lord Charleville), is an elegant terrace of Edwardian Houses located minutes from the city centre, Trinity College, Temple Bar, en route to Dublin Airport and car ferry."},
    {"id": 9, "name": "The Address Connolly", "desc": "The Address Connolly is centrally located in Dublin City centre. The hotel boasts well-appointed guest rooms and suites offering every amenity to ensure a comfortable and luxurious stay."},
    {"id": 10, "name": "Blooms Hotel", "desc": "Blooms Hotel is located in the heart of Dublin City Centre's lively Temple Bar district. The comfortable, three star hotel is just a short stroll from Trinity College, Grafton Street and many other major attractions."},
    {"id": 11, "name": "Brooks Hotel", "desc": "The 4 star Brooks Hotel is located in the heart of Dublin City Centre, just a few minutes from Grafton Street, Temple Bar and Trinity College. It is a fine, luxury hotel that boasts many amenities and appeals to the modern, discerning traveller."},
    {"id": 12, "name": "Grafton Guesthouse", "desc": "The Grafton Guesthouse is in a beautiful Victorian Gothic style building. Grafton Guesthouse has comfortable, contemporary and fun style bedrooms, great breakfasts and friendly and helpful staff."},
    {"id": 13, "name": "The Forge", "desc": "The Forge is a charming boutique style, family run guest house , ideally located in Saggart Village, south west County Dublin."},
    {"id": 14, "name": "Dublin Skylon Hotel", "desc": "The Dublin Skylon Hotel is a modern, 126 bedroom hotel boasting free WiFi, a secure self-driving car park and all non-smoking bedrooms. It is just a 10 minutes drive from Dublin International Airport and five minutes from the city centre and Croke Park Stadium."},
    {"id": 15, "name": "Maldron Hotel Smithfield", "desc": "Maldron Hotel Smithfield has everything needed for a hotel break in Dublin with 92 bedrooms. Superbly located in the heart of Dublin, it is an ideal base whilst exploring Ireland's capital city."},
    {"id": 16, "name": "InterContinental Dublin", "desc": "5 star InterContinental Ballsbridge, Dublin???s only True 5 Star Urban Resort right in the heart of Dublin ??? feel a world away from it all in the bustle of Dublin City."},
    {"id": 17, "name": "The Mercantile Hotel", "desc": "The Mercantile Hotel is superbly located on Dame Street, right in the heart of Dublin City's commercial and entertainments area. The comfortable three-star hotel offers a variety of accommodation options, an eatery, and regular live music."},
    {"id": 18, "name": "Merrion Mews", "desc": "Merrion Mews is located in Fitzwilliam Lane, Dublin 2. The Merrion Mews offers a truly unique experience for guests. The spacious accommodation has a living area which overlooks the stable yard."},
    {"id": 19, "name": "Seaview Self Catering", "desc": "Seaside and city! This two bedroom apartment is well appointed and only 4km from Dublin City centre on the gorgeous Sandymount Strand. This exclusive residential area is a great base from which to explore Dublin City."},
    {"id": 20, "name": "Staycity Aparthotels Dublin Castle", "desc": "Staycity Aparthotels Dublin Castle is a blend of home and hotel. The contemporary studio apartments are ideal for couples and solo travellers."},
    {"id": 21, "name": "Marine Hotel", "desc": "The Marine Hotel is located at Sutton Cross, a gateway to Howth and Dublin City. The Marine Hotel has great warmth and character, with its lawn rolling down to the shores of Dublin Bay."},
    {"id": 22, "name": "Cashel Lodge", "desc": "Cashel Lodge Bed and Breakfast is conveniently located ten minutes from Dublin Airport and Dublin Ferry Port and the bustling Dublin City Centre."},
    {"id": 23, "name": "Luttrellstown Castle Resort", "desc": "Situated on 567 acres of lush private parkland, Luttrellstown Castle Resort is a magical world away from the hustle and bustle. The resort has an alpine lodge style clubhouse, a scenic 20 acre Liffey fed lake filled with trout, perch and pikes and the jewel in the crown ??? the private hire Luttrellstown Castle, a dream location for any occasion."},
    {"id": 24, "name": "Clayton Hotel Cardiff Lane", "desc": "Clayton Hotel Cardiff Lane is a 4 star deluxe Hotel with 304 bedrooms located in Dublin 2, offering beautifully appointed guest rooms in a light spacious contemporary style."},
    {"id": 25, "name": "Temple Bar Hotel", "desc": "Temple Bar Hotel is one of Dublin City???s most centrally located hotels, making it ideal for a city break or corporate function. On its doorstep, guests will find all the wonderful bars, cafes and restaurants of the vibrant Temple Bar neighbourhood."},
    {"id": 26, "name": "Crowne Plaza Dublin Northwood", "desc": "Relax in four-star comfort at the Crowne Plaza Dublin Northwood, which is situated in Santry, County Dublin. Ideally situated just 3 kilometres from Dublin Airport and 8 kilometres from Dublin City centre the hotel boasts extensive woodlands."},
    {"id": 27, "name": "Molesworth Court Suites", "desc": "Molesworth Court Suites in Dublin City Centre offers three and four star, fully equipped self-catering accommodation to the visitor who wants a home from home, located a short walk from Grafton Street, Trinity College and St Stephens Green."},
    {"id": 28, "name": "Wellington Quay CityBreak Apartments", "desc": "Wellington Quay CityBreak Apartments are located in the heart of Dublin city. These luxurious modern apartments are within walking distance of all major attractions including Trinity College, Grafton Street, Temple Bar, Dublin Castle and many more."},
    {"id": 29, "name": "Uppercross House Hotel", "desc": "The Uppercross House Hotel is a beautiful 3 star boutique hotel centrally located in the heart of Rathmines and very close to Dublin City offering a warm welcome with a home-from-home atmosphere."},
    {"id": 30, "name": "Heyward Mews", "desc": "Heyward Mews Holiday Homes are set in a peaceful rural setting, adjacent Roganstown Hotel and Country Club. Heyward Mews is a lovely courtyard of holiday homes just 15km from Dublin city???s centre and just five kilometres from Dublin Airport."},
    {"id": 31, "name": "The Dean", "desc": "Boasting a rooftop bar and restaurant, The Dean is located in Dublin City Centre. With free WiFi access available, the property is newly designed with vibrant colours. Ha'penny Bridge is an 18 minute walk away."},
    {"id": 32, "name": "Mespil Hotel", "desc": "The four star Mespil Hotel is located overlooking the Grand Canal and within walking distance to Grafton St, Aviva Stadium and RDS. With 259 superior rooms, stylish lounge and Lock Four Restaurant, free WiFi, Fitness Suite & Business Centre."},
    {"id": 33, "name": "The Grafton Hotel", "desc": "The Grafton Hotel with its 127 luxurious rooms is a buzzing home in the heart of Dublin, a stone???s throw from Trinity College, Grafton Street, the main shopping street and The Guinness Storehouse which are all in easy walking distance from the hotel."},
    {"id": 34, "name": "Greenacres", "desc": "Bungalow 2 miles from Rathcoole on Kilteel road opposite Beech Park Golf Club. Frommer recommended. Riding stables locally."},
    {"id": 35, "name": "Carlton Hotel Dublin Airport", "desc": "Carlton Hotel Dublin Airport is a 4 Star Hotel recently renovated to a very high standard. Family owned and conveniently located just off the M1/M50 Motorways and a short drive from some of Dublin's top beaches and attractions. A must visit!"},
    {"id": 36, "name": "Woodview Farmhouse", "desc": "Woodview Farmhouse is a purpose built establishment, located in North Co. Dublin. It is two kilometres from the Irish Sea and four kilometres from the seaside town of Skerries. The farmhouse is within walking distance of the majestic Ardgillan Park."},
    {"id": 37, "name": "Hillview House (Dublin)", "desc": "Hillview House Guesthouse, is ideally situated in a tranquil country setting, between Lusk and Skerries in County Dublin, yet only 15 minutes drive to Dublin Airport and 30 minutes drive to Dublin City."},
    {"id": 38, "name": "The Hendrick", "desc": "The Hendrick is a minimalist lifestyle property in Dublin City Centre. Comprising of 146 bedrooms, the style of the property offers contemporary boutique style accommodation along with a dynamic lobby, bar and caf?? area."},
    {"id": 39, "name": "Plaza Hotel", "desc": "The four-star Plaza Hotel is a stylish, modern hotel in South County Dublin, overlooking the Wicklow Mountains, just a twenty minute drive from the city centre and Dublin Airport."},
    {"id": 40, "name": "The Marker Hotel", "desc": "Extraordinary, surprising and luxurious, The Marker Hotel is the perfect urban retreat for those who crave the unconventional, yet still expect the exceptional standards of service that are the signature of a member of The Leading Hotels of the World??."},
    {"id": 41, "name": "Maldron Hotel Kevin Street", "desc": "Maldron Hotel Kevin Street is a 4 star hotel located beside St Patrick's Cathedral and just minutes walk from St Stephen???s Green, Grafton Street and many other well known tourist attractions."},
    {"id": 42, "name": "Haddington House", "desc": "Haddington House is a boutique hotel on the seafront in Dun Laoghaire overlooking Dublin Bay. Originally four Georgian townhouses the hotel began it's life as Haddington House, a finishing school for girls. it was converted into a hotel in the 1950's"},
    {"id": 44, "name": "Harap Farm", "desc": "Hapar Farm are 3 Star F??ilte Ireland approved semi-detached three bedroom houses set on a family run tillage farm in North County Dublin. The properties are located only 20 minutes from the centre of Dublin City and 10 minutes from Dublin Airport."},
    {"id": 45, "name": "The Davenport", "desc": "The Davenport is one of Dublin's most iconic luxury hotel's, where heritage and history seamlessly blend with modern luxury right in the heart of Georgian Dublin."},
    {"id": 46, "name": "Garden Lane Backpackers", "desc": "Garden Lane Backpackers is a stylish and contemporary hostel in the convenient central location of Christchurch, Dublin. Garden Lane aims to make your stay in Dublin as comfortable and enjoyable as possible."},
    {"id": 47, "name": "Hilton Dublin", "desc": "The 4 star Hilton Charlemont Dublin is an Irish owned modern hotel overlooking the leafy Grand Canal. Only minutes from all Dublin's historic attractions and shopping area Grafton Street, it offers the ideal location for visitors to Dublin."},
    {"id": 49, "name": "Jurys Inn Christchurch", "desc": "Jurys Inn Christchurch is located in the historic quarter of Dublin City Centre, just steps from Christchurch Cathedral and the lively Temple Bar area. The hotel offers modern and stylish accommodation and is an ideal base for business and leisure."}
];

loadElements("#accomodations", accomodations);
