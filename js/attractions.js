'use strict'

const loadElements = (pageID, arr) => {
    const container = document.querySelector(pageID);
    arr.forEach(entry => { const section = document.createElement("section");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.textContent = entry["name"];
        img.src = `images/accomodation${entry["id"]}.jpg`
        p.textContent = entry["desc"]; section.append(img, h3, p);
        container.appendChild(section);
    });
}

const attractions = [
    {"id": 0, "name": "George Bernard Shaw", "desc": "George Bernard Shaw was sculpted by his great friend, Paolo Troubetzkoy. Shaw’s famous words about the importance of art feature on the wall behind, appropriate considering the statue's position in front of the National Art gallery at the Clare St entrance."},
    {"id": 1, "name": "Robert Emmet Statue", "desc": "Come and view this bronze statue of the Irish patriot Robert Emmet as it looks over his place of birth in St Stephen’s Green in Dublin City. Born in 1778, he died at the age of 25 years for the love of his country."},
    {"id": 2, "name": "Avoca Malahide", "desc": "Set on the grounds of the stunning Malahide Castle & Gardens, Avoca Malahide is a wonderful spot for a day trip."},
    {"id": 3, "name": "Phil Lynott Statue", "desc": "Phil Lynott was well known among Dubliners but with the unveiling of this statue it is clear that his and Thin Lizzy's music stretched far and wide. The statue is sought out by many visitors."},
    {"id": 4, "name": "Meeting Place", "desc": "At the North end of the Ha'Penny Bridge, the Meeting Place is affectionately nicknamed ‘the Hags with the Bags’ by the locals. Sculpted by Jackie McKenna, it was unveiled in 1988, the year of Dublin’s Millennium celebrations."},
    {"id": 5, "name": "Isaac Butt", "desc": "Isaac Butt (1813–1879) is regarded as the founder of the Home Rule Movement in Ireland. Born in 1813, Isaac Butt was a politician and nationalist leader. He was a member of the Irish and English Bar, and was a renowned lawyer and scholar.**"},
    {"id": 6, "name": "Jonathan Swift", "desc": "Jonathan Swift (1667-1745), author of Gulliver's Travels, was Dean of St Patrick's Cathedral in Dublin from 1713-1745. A monument in St Patrick's Cathedral and a bust in Trinity College Dublin's library are dedicated to him."},
    {"id": 7, "name": "Designyard", "desc": "Designyard is a leading contemporary jewellery and applied arts gallery in Dublin City centre. The Gallery exhibits the best of contemporary Irish jewellery and work from over one hundred European jewellery artists."},
    {"id": 8, "name": "Oscar Wilde", "desc": "The great writer was celebrated for his devil-may-care attitude to life and that’s captured in Danny Osborne’s much-loved statue. Oscar reclines on a quartz boulder - sourced in the Wicklow Mountain - and decorated with colourful semi-precious stone. It was unveiled in 1997."},
    {"id": 9, "name": "Thomas Davis Statue And Memorial Fountain", "desc": "The Thomas Davis Statue and Memorial Fountain, on Dame Street in Dublin City, is dedicated to the journalist, poet and politician who had a huge influence on the generation who achieved Irish Independence in the 20th century."},
    {"id": 10, "name": "Lynda Booth’s Dublin Cookery School", "desc": "Lynda Booth’s Dublin Cookery School is an award-winning cookery school situated in Blackrock, Co Dublin."},
    {"id": 11, "name": "Dublin Falconry", "desc": "Dublin Falconry is now situated in Luttrellstown Castle Resort in Dublin 15. Visitors learn the art of falconry, with flying displays and hands-on experiences. They cater for everyone including children and special-needs customers. Handle your hawk and get a selfie with it. They also offer Owl experiences for great memories."},
    {"id": 12, "name": "Jeremiah O'Donovan Rossa", "desc": "Jeremiah O'Donovan Rossa was born in 1831. He was an active Fenian leader and died in 1915. He is buried in Glasnevin Cemetery and a monument in St Stephen's Green, designed by Séamus Murphy, is dedicated to him."},
    {"id": 13, "name": "Guinness Gallery", "desc": "Elisabeth Guinness opened the Guinness Gallery in Foxrock, Dublin in 1993. It specialises in contemporary art glass but also offers paintings, sculpture, jewellery, studio ceramics and and gift ware."},
    {"id": 14, "name": "National Basketball Arena", "desc": "The National Basketball Arena, opened in 1993, is Ireland's premier indoor sports facility with permanent seating for 2,100 and 18,000 sq ft of floor space."},
    {"id": 15, "name": "O'Connell Bridge", "desc": "At the very hub of the city of Dublin, O'Connell Bridge, formerly Carlisle Bridge, was built in 1790 as one of the links in the Wide Streets Commissioners' plan to connect north and south with a great axial route."},
    {"id": 16, "name": "Activities Ireland", "desc": "Welcome to Activities Ireland. Here you'll find one of Ireland's leading ground-handling operator in golf breaks, golf tours, activity holidays and leisure breaks in Ireland, across Europe and abroad."},
    {"id": 17, "name": "Samuel Beckett Bridge", "desc": "The Samuel Becket Bridge in Dublin City is one of the new landmarks of Ireland's capital city. The bridge connects Guild Street on the north bank of the River Liffey, with Sir John Rogerson’s Quay on the south bank."},
    {"id": 18, "name": "The Design Tower", "desc": "The Design Tower is a listed building of historic significance located on Grand Canal Quay, in Dublin City centre and is now home to some of Ireland's exceptionally talented and award winning designers, artists and crafts people."},
    {"id": 19, "name": "Irish Celtic Craftshop", "desc": "The Irish Celtic Craftshop is a treasure trove of gifts. A family run business since 1992, this shop has an ideal location in the oldest part of Dublin beside Christchurch Cathedral."},
    {"id": 20, "name": "Fusiliers' Arch, St Stephen's Green", "desc": "The Fusiliers' Arch, a war memorial, can be found at the entrance to St Stephen's Green Park just off Grafton Street in Dublin City centre."},
    {"id": 21, "name": "Brown Thomas Arnotts", "desc": "Brown Thomas Arnotts is one of Ireland's luxury and lifestyle fashion retailers. It is famed for their creativity that touches all their brands, buildings and experiences. Visit one of their retail stores located in Dublin, Cork, Limerick and Galway."},
    {"id": 22, "name": "The Chocolate Warehouse", "desc": "The Chocolate Warehouse, in Walkinstown Dublin, is a family friendly venue where visitors can enjoy the story of chocolate with a hands on experience of making chocolates where you get to bring home your own creations. Happy memories!"},
    {"id": 23, "name": "Cú Chulainn", "desc": "The General Post Office (GPO) that housed the rebels during the 1916 Rising is a suitably grand public space to show Oliver Sheppard’s 1935 statue, The Death of Cú Chulainn."},
    {"id": 24, "name": "Famine Memorial", "desc": "On Custom House Quay, in the Dublin City Docklands, you will see the Famine statues. These haunting figures commemorate the most profound disaster in Irish history, when Ireland lost more than one million citizens to starvation."},
    {"id": 25, "name": "Declan Killen, Goldsmith", "desc": "Since 1985, Declan Killen, Goldsmith, has brought unique contemporary and Celtic jewellery to Ireland, operating from their base on Fade Street in Dublin City Centre."},
    {"id": 26, "name": "Merrion Square Open Air Art Gallery", "desc": "The Merrion Square Open Air Art Gallery is Dublin City’s only free year-round outdoor art exhibition which now has over 200 artists showing and selling their work every Sunday."},
    {"id": 27, "name": "Universal Links On Human Rights Sculpture", "desc": "The thought-provoking Universal Links on Human Rights Sculpture in Dublin City centre invites you to stop a moment and contemplate its purpose and meaning."},
    {"id": 28, "name": "Edmund Burke", "desc": "Edmund Burke (12 January 1729 – 1797) was a political philosopher and orator, and is generally viewed as the philosophical founder of modern Conservatism. He was born on Arran quay in Dublin. There is a monument to him at Trinity College, Dublin."},
    {"id": 29, "name": "Henry Grattan", "desc": "Henry Grattan, leader of the Independent Irish Parliament of 1783-1800, is commemorated by monuments to him in various parts of Dublin city including: College Green, Rotunda, City Hall and Cork Street."},
    {"id": 30, "name": "Wolfe Tone", "desc": "Theodore Wolfe Tone rose to become the leader of the 1798 Irish Rebellion, and is widely regarded as the father of Irish republicanism. The great revolutionary is immortalised in rousing song and in Edward Delaney’s magnificent 1964 statue at the entrance to St Stephen's Green."},
    {"id": 31, "name": "National Memorial To Members Of The Defence Forces", "desc": "Visit the National Memorial to members of the Defence Forces in Merrion Square Park. The memorial is in a quiet location where families, relatives, and passers by can reflect on the lives of members of the Defence Forces who have died in the service of the Irish State."},
    {"id": 32, "name": "Sphere Within Sphere", "desc": "'Sphere Within Sphere' is the name of the spectacular bronze Globe situated outside the Main Library in Trinity College Dublin."},
    {"id": 33, "name": "The Spire", "desc": "The Spire of Dublin is a striking 120 metre high landmark in the heart of Dublin City, which was unveiled in 2002."},
    {"id": 34, "name": "Leopardstown Racecourse", "desc": "Leopardstown Racecourse in County Dublin, hosts some of Ireland’s most famous racing festivals including the Dublin Racing Festival in February, Longines Irish Champions Weekend in September and the four day Leopardstown Christmas Festival. Leopardstown Racecourse is host to both national hunt (December – March) and flat racing (April – October) fixtures, and has something to suit all level of interests."},
    {"id": 35, "name": "Arran Street East", "desc": "Arran Street East is an artisanal ceramic pottery studio and shop located Smithfield, a historic and vibrant area of the city. The Tenement Museum at 14 Henrietta Street is nearby."},
    {"id": 36, "name": "Breda Haugh Jeweller And Designer", "desc": "Breda Haugh Jeweller and Designer is an established jeweller based in The Design Tower, in the heart of Dublin City. The studio sells its own creative designs in the precious metals of gold and silver."},
    {"id": 37, "name": "Countess Markievicz And Poppet Statue", "desc": "Countess Markievicz (1868-1927) was born Constance Georgine Gore Booth. This bronze statue by Elizabeth McLaughlin is a tribute to Countess Markievicz, an inspiring Irish politician, revolutionary, nationalist and suffragette."},
    {"id": 38, "name": "Doyle Design Dublin", "desc": "Doyle Design Dublin - Handmade Jewellery is a goldsmith studio based in the Georges Street Arcade in Dublin City centre, specialising in bespoke Celtic jewellery and wedding rings."},
    {"id": 39, "name": "Arthur Griffith", "desc": "A statue of Arthur Griffith stands in the garden of Leinster House in Dublin. He was the founder of the Sinn Féin party and the president of the Provisional Government of the new Irish Free State of 1922."},
    {"id": 40, "name": "Gravity Climbing Centre", "desc": "Gravity Climbing Centre provides a world class climbing wall close to the heart of Dublin City. It offers the best indoor bouldering in Ireland."},
    {"id": 41, "name": "Celtic Spirit Jewellery", "desc": "At Celtic Spirit you will find the biggest range of Irish Designed Sterling Silver Jewellery (best prices - guaranteed). Their wonderful team of friendly staff are looking forward to meeting you! Located in the iconic Stephen’s Green Shopping Centre."},
    {"id": 42, "name": "Urban Plant Life Garden Centre", "desc": "Urban Plant Life Garden Centre is located in Dublin's historic Liberties district. You'll find shrubs, climbers, roses, interior & artificial flowering/foliage plants, sundries, decorative pots and so much more."},
    {"id": 43, "name": "Photography Tours Ireland", "desc": "Photography Tours Ireland is an Irish walking tour with the emphasis on capturing the experience on camera."}
];

loadElements("#attractions", attractions);
