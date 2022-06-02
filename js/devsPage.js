const devs = document.querySelector("#abt_devs").children;


for(let i = 0 ; i < devs.length ; i++){
  const dev = devs[i];
  const toggleBtn = dev.querySelector(".styled_btn");
  toggleBtn.addEventListener("click",function(){
    const list = dev.querySelector("section:nth-child(3)");
    list.classList.toggle("show");
    if(list.classList.contains("show")) toggleBtn.innerHTML = "Hide Contributions<span>&#187;</span>"
    else toggleBtn.innerHTML ="See Contributions<span>&#187;</span>";
    
  })
}
