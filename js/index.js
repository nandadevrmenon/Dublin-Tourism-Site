const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log(entry)
    }, {})

});

console.log(observer);





///////FOR STICKY HEDAER/////////////////


window.addEventListener("scroll",function(){
  const header = document.querySelector("#home_page header");
  header.classList.toggle("sticky",window.scrollY>0);
})