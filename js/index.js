const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log(entry)
    }, {})

});

console.log(observer);





///////FOR STICKY HEDAER/////////////////

let dropDownActive = false;

const header = document.querySelector("#home_page header");
window.addEventListener("scroll",function(){
  if(!dropDownActive){
  header.classList.toggle("sticky",(window.scrollY>0));
  }
  else header.classList.add("sticky");
})

const accomodationBtn = document.querySelector("#ttd");
const accomodationDropdown = document.querySelector(".dropdown");

accomodationBtn.addEventListener("click",function(){
  let dropdownClassList = accomodationDropdown.classList;
  if(dropdownClassList.contains("show")){
    dropdownClassList.remove("show");
    dropDownActive = false;
  }
  else {
    dropdownClassList.add("show");
    dropDownActive=true;
    header.classList.add("sticky");
  }
});