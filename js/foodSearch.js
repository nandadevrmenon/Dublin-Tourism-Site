const searchBar = document.querySelector("#search form input");
const cardsContainer = document.querySelector(".cards_container");
const cardNodes = cardsContainer.childNodes;
const cards =[];
//we get a card object for each section in the cards container
for(let i = 0; i <cardNodes.length ; i++){
    let card = cardNodes[i];
    let cardName = card.childNodes[1].textContent.toLocaleLowerCase();
    let cardType = card.dataset.type;
    cards.push({ name : cardName, element :card, type: cardType});
}

let currentCategory = 3;
//catergory 3=restaurant , 2=pub , 1=cafe 
const showCards = (category) =>{
  cards.forEach( card =>{
  currentCategory=category;
  let isShown = card.type == currentCategory;
  card.element.classList.toggle("hide_card",!isShown);
})}

//for seach functionality
searchBar.addEventListener("input",(e) =>{
  const input = e.target.value;
  console.log(input);
  cards.forEach( card =>{
    let isShown = (card.type==currentCategory) && (card.name.includes(input.toLocaleLowerCase()));// will show only if card is of current category and name matches the search input.
    card.element.classList.toggle("hide_card",!isShown);
  });
});

showCards(3);// when we laod the page , it shows the restaurants by defualt.

const tabs = document.querySelector("#tabs ul");

const restButton = tabs.children[0];
const cafeButton = tabs.children[1];
const pubButton = tabs.children[2];

restButton.addEventListener("click",function(){
  clearSearch();
  showCards(3);
  pubButton.classList.remove("selected");
  cafeButton.classList.remove("selected");
  restButton.classList.toggle("selected",true);
});

cafeButton.addEventListener("click",function(){
  clearSearch();
  showCards(1);
  restButton.classList.remove("selected");
  pubButton.classList.remove("selected");
  cafeButton.classList.toggle("selected",true);
});

pubButton.addEventListener("click",function(){
  clearSearch();
  showCards(2);
  restButton.classList.remove("selected");
  cafeButton.classList.remove("selected");
  pubButton.classList.toggle("selected",true);
});

const clearSearch= ()=>{
 searchBar.value ="";
}