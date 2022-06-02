
/* Marcel Rojas -floatin back to top button https://codepen.io/marcelrojas/pen/WNwgBRg */



const banner = document.querySelector(".banner");
const footer = document.querySelector("footer")

const backToTopButton = document.querySelector("#back_to_top");

const headerObserver = new IntersectionObserver(entries=>{
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Show button
      backToTopButton.classList.remove("is_active");
    } else {
      // Hide button
      backToTopButton.classList.add("is_active");
    }
  });
},{
  threshold:0.3
});


const footerObserver = new IntersectionObserver(entries=>{
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Show button
      backToTopButton.classList.add("move_up");
    } else {
      // Hide button
      backToTopButton.classList.remove("move_up");
    }
  });
},{
  threshold:0.3
});

  headerObserver.observe(banner);
  footerObserver.observe(footer);



backToTopButton.addEventListener("click",function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"

  })
});
