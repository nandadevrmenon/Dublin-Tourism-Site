console.log("search functionality loaded")

const searchBar = document.querySelector("#search form input");
const cardsContainer = document.querySelector(".cards_container");


const cardNodes = cardsContainer.childNodes;


const cards =[];

for(let i = 0; i <cardNodes.length ; i++){
    let card = cardNodes[i];
    let cardName = card.childNodes[1].textContent.toLocaleLowerCase();
    cards.push({ name : cardName, element :card});
}




searchBar.addEventListener("input",(e) =>{
    const input = e.target.value;
    cards.forEach( card =>{
      let isShown = card.name.includes(input.toLocaleLowerCase());
      card.element.classList.toggle("hide_card",!isShown);
    });
});