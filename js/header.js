let dropDownActive = false;

const header = document.querySelector("#page_header");

window.addEventListener("scroll",function(){
  if(!dropDownActive){
  header.classList.toggle("sticky",(window.scrollY>0));
  }
  else header.classList.add("sticky");
})


const thingsToDoButton = document.querySelector("#ttd");
const accomodationDropdown = document.querySelector("#page_header .dropdown");

thingsToDoButton.addEventListener("click",function(){
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


const mobileNavToggle = document.querySelector("#menu_toggle");

mobileNavToggle.addEventListener("click",function(){
  const mobileNav = document.querySelector("#mobile_nav");
  mobileNav.classList.toggle("is_shown");
});



const mobileDropdownButton = document.querySelector("#mobile_nav>ul>li:nth-child(2)");

mobileDropdownButton.addEventListener("click",function(){
  const mobileDropdown = document.querySelector("#mobile_nav ul .dropdown");
  let dropdownClassList = mobileDropdown.classList;
  if(dropdownClassList.contains("is_active")){
    dropdownClassList.remove("is_active");
  }
  else {
    dropdownClassList.add("is_active");
  }
});







