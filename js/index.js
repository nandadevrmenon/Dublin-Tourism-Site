window.addEventListener("scroll",function(){
  const header = document.querySelector("#home_page header");
  header.classList.toggle("sticky",window.scrollY>0);
})
