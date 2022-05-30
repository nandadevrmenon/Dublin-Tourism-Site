'use strict'

const loadElements = (pageID, arr) => { const container = document.querySelector(pageID); console.log(container); arr.forEach(entry => { const section = document.createElement("section"); const img = document.createElement("img");
        const h3 = document.createElement("h3"); const p = document.createElement("p");
        h3.textContent = entry["name"]; // img.src = `images/accomodation${entry["id"]}.jpg` img.src = "images/fancy3.jpg";
        p.textContent = entry["desc"]; section.append(img, h3, p);
        container.appendChild(section);
    });
}

const shopping = [
    // shopping 0-38
    { "id": 0, "name": "F. W. Sweny & Co. Ltd.", "desc": "weny's Pharmacy is a Joycean landmark and the place where fictional character Leopold Bloom of Ulysses bought his lemony soap. It is located close to Trinity College and Dublin City Centre. The lemony soap is still sold there and daily readings of Joyce's works are open to the public." },
    { "id": 1, "name": "Dundrum Town Centre", "desc": "ocated in Dublin, Dundrum Town Centre is home to more than 100 stores, from high street names to the more luxurious brands. It also boasts 40 restaurants and cafes, 12 cinema screens and two nightclubs." },
    { "id": 2, "name": "O'Sullivan Antiques", "desc": "isit O'Sullivan Antiques in Dublin City, where they specialise in 18th and 19th century furniture, paintings, mirrors, chandeliers, mantelpieces and garden furniture." },
    { "id": 3, "name": "Na Píobairí Uilleann", "desc": "a Píobairí Uilleann (NPU), the Society of Uilleann Pipers was founded in 1968 when there were less than 100 uilleann pipers remaining. Now, over 45 years later, NPU is a thriving arts organisation dedicated to Sharing the Sound of Ireland." },
    { "id": 4, "name": "Mespil Road Lunchtime Market", "desc": "isit the fresh food market at Mespil Road, Grand Canal every Thursday lunchtime from 11:30am – 2pm and try some delicious street food from a select group of street food vendors, chefs and producers." },
    { "id": 5, "name": "Magee Of South Anne Street", "desc": "ith over 150 years behind them; Magee's is a true heritage brand." },
    { "id": 6, "name": "Moore Street Market", "desc": "oore Street Market is the scene of Dublin City's famous street barrow vendors. A selection of fruit, vegetables and flowers are available making this street full of colour." },
    { "id": 7, "name": "McDowells Jewellers The Happy Ring House", "desc": "cDowells Jewellers is located in Dublin city centre. It has a wide selection of jewellery for sale and also carries out all types of jewellery repairs, ring resizing, restoration and a clean and polish service." },
    { "id": 8, "name": "Omni Park Shopping Centre", "desc": "mni Park Shopping Centre is a one stop shopping destination located in the Santry area of North Dublin City." },
    { "id": 9, "name": "Cathedral Stamps", "desc": "athedral Stamps is Dublin City's largest stamp and coin shop. Located in the KCR Industrial Estate just off Kimmage Road Lower, it sells Irish and foreign stamps, covers, collections and coins to suit all budgets." },
    { "id": 10, "name": "Dublin Food Co-Op Organic Food Market", "desc": "ublin Food Co-op Organic Food Market is held every Thursday and Saturday in Dublin city, County Dublin. It is a member owned, whole food cooperative also open to non members. It provides fresh organic food at reasonable prices." },
    { "id": 11, "name": "Greenaer", "desc": "reenAer, is one of Ireland’s leading electric bicycle specialists. GreenAer is located off Pearse Street near Trinity College in Dublin City Centre. For running errands, commuting or gentle exercise, their e-bikes offer beautiful designs with the latest technology that cover a multitude of terrain." },
    { "id": 12, "name": "John Farrington Antiques", "desc": "ohn Farrington Antiques on Drury Street, in the heart of Dublin City, specialise in antique jewellery, silver and gilt mirrors or one off and commissioned pieces with antique precious stones and gems." },
    { "id": 13, "name": "The Design Tower", "desc": "he Design Tower is a listed building of historic significance located on Grand Canal Quay, in Dublin City centre and is now home to some of Ireland's exceptionally talented and award winning designers, artists and crafts people." },
    { "id": 14, "name": "Coppinger Row Outdoor Farmers Market", "desc": "oppinger Row Outdoor Farmers Market takes place every Thursday in Dublin city. Shoppers are invited to browse and buy from the array of stalls selling foods, crafts and much more." },
    { "id": 15, "name": "Howth Market", "desc": "owth Market is a lifestyle market open every Saturday, Sunday and Bank Holiday from 10am to 6pm. It is conveniently located opposite the Howth Dart Station." },
    { "id": 16, "name": "Carroll's Irish Gift Stores", "desc": "arroll's Irish Gifts is a retail chain that stocks leading Irish brands and a wide range of souvenirs. Stores are located in Dublin, Cork and Belfast." },
    { "id": 17, "name": "The Liberty Market", "desc": "he Liberty Market is by the far the most famous of the small Dublin city markets. It is located near the famous Christ Church Cathedral where shoppers will find great bargains." },
    { "id": 18, "name": "Skerries Mills Farmers Market", "desc": "kerries Mills Farmers Market is held in Skerries Mills every Saturday. Visitors and locals are invited to browse the wide array of stalls, buy fresh and local produce. Soak in the market atmosphere." },
    { "id": 19, "name": "Nutgrove Shopping Centre", "desc": "utgrove Shopping Centre is an indoor shopping centre in Dublin. It has a wonderful range of stores including fashion, food, phones and more." },
    { "id": 20, "name": "The Outdoor Adventure Store", "desc": "he Outdoor Adventure Store is an outdoor and camping store located in Dublin City Centre, Cork City Centre and Bray, County Wicklow." },
    { "id": 21, "name": "Paul Sheeran Jewellers", "desc": "aul Sheeran Jewellers located on Grafton Street, Dublin City, is one of Ireland’s leading retailers of diamond engagement rings, diamond jewellery and luxury watch brands." },
    { "id": 22, "name": "Murphy’s Harley-Davidson", "desc": "urphy’s H-D is located right in the heart of Dublin City Centre. Open daily. Murphy’s Harley-Davidson sell H-D motor-clothes, official H-D merchandise and can give you all the information you about owning and caring for your very own H-D motorcycle." },
    { "id": 23, "name": "Dun Laoghaire Shopping Centre", "desc": "ocated in the heart of Dun Laoghaire, County Dublin, the Dun Laoghaire Shopping Centre offers dozens of shops, cafes, restaurants and a creche. The centrally located shopping centre also has a car park." },
    { "id": 24, "name": "Declan Killen, Goldsmith", "desc": "ince 1985, Declan Killen, Goldsmith, has brought unique contemporary and Celtic jewellery to Ireland, operating from their base on Fade Street in Dublin City Centre." },
    { "id": 25, "name": "The Collective", "desc": "he Collective is a jewellery shop on Drury Street in the Cultural Quarter of Dublin City Centre. The Collective aim to support the designs of emerging Irish jewellery makers and house a variety of pieces from Irish designers." },
    { "id": 26, "name": "Rory's Fishing Tackle", "desc": "ory's Fishing Tackle caters for both freshwater and sea angling. They provide live and frozen bait and are an authorised distributor of fishing permits. Rory’s are also stockists of archery equipment." },
    { "id": 27, "name": "Morton's", "desc": "orton's in Dublin city offers the freshest in fruit, vegetables, meat, fish, their kitchen and deli offerings, along with their fine wine and cheese. With a wealth of products both everyday and luxury customers are sure to find exactly what they want." },
    { "id": 28, "name": "64 Wine", "desc": "64 Wine is one of Ireland's leading wine shop and wine bar combinations, located in Glasthule, County Dublin. All wines are sourced from small, artisan producers who are as passionate about quality produce as 64 Wine." },
    { "id": 29, "name": "The Square", "desc": "he Square in Tallaght, County Dublin has over 160 shops, restaurants, and is easily accessible by bus, car, taxi and Luas Red Line." },
    { "id": 30, "name": "Brown Thomas Arnotts", "desc": "rown Thomas Arnotts is one of Ireland's luxury and lifestyle fashion retailers. It is famed for their creativity that touches all their brands, buildings and experiences. Visit one of their retail stores located in Dublin, Cork, Limerick and Galway." },
    { "id": 31, "name": "Cleo", "desc": "leo specialises in Irish clothing and handknits made from natural fibres. Located in Dublin City, Cleo sell handknit sweaters and wearable art in a variety of styles and colours for men, women and children." },
    { "id": 32, "name": "The Library Project", "desc": "he Library Project, in the heart of Dublin's Temple Bar, is an art bookshop with gallery space. Its public resource library is dedicated to inspiring contemporary photography publications from all over the world." },
    { "id": 33, "name": "Gravity Climbing Centre", "desc": "ravity Climbing Centre provides a world class climbing wall close to the heart of Dublin City. It offers the best indoor bouldering in Ireland." },
    { "id": 34, "name": "Designer Mart At Cow's Lane", "desc": "esigner Mart at Cow's Lane is an outdoor market located in Temple Bar in Dublin City Centre and showcases artwork and designer creations by Irish and Ireland based designers." },
    { "id": 35, "name": "Irish Celtic Craftshop", "desc": "he Irish Celtic Craftshop is a treasure trove of gifts. A family run business since 1992, this shop has an ideal location in the oldest part of Dublin beside Christchurch Cathedral." },
    { "id": 36, "name": "Designist", "desc": "esignist is a homeware and giftware shop on South Great George's St in Dublin City centre, directly across from the George's Street Arcade. Designist offers a wide range of unique objects that fall under their tag line 'remarkable gifts and bright ideas'." },
    { "id": 37, "name": "Bike Stop Dublin", "desc": "ike Stop Dublin is a centrally located bike rental option on Capel Street in Dublin City. Particular care is taken with visitors, offering them professional service and an unforgettable cycling adventure." },
    { "id": 38, "name": "Tipperary Crystal", "desc": "ipperary Crystal is an Irish design legend that has become synonymous with high-end designs and excellent quality crystal, glass and jewellery. Look for it in independent giftware stores, jewellers, department stores and established homeware stockists." }
];

loadElements("#shopping", shopping);
