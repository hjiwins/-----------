//nav effect
const mainMenu = document.querySelectorAll(".nav-main ul li");
const subMenu = document.querySelector(".nav-sub");
const nav = document.querySelector("nav");

mainMenu.forEach((menu) => {
  menu.addEventListener("mouseover", () => {
    subMenu.classList.remove("slide-up");
    subMenu.classList.toggle("slide-down");
  });
});
nav.addEventListener("mouseout", () => {
  subMenu.classList.remove("slide-down");
  subMenu.classList.toggle("slide-up");
});

//carousel
const container = document.querySelector(".carousel-container");
const mainImages = document.querySelectorAll(".carousel-container img");
let now = 0;

setInterval(carouselSlider,3000);

function carouselSlider() {
    now=now==(mainImages.length-1)? 0: now+=1;
    console.log(now);
    const imageWidth = mainImages[0].width;
    container.style.transform = `translateX(-${imageWidth * now}px)`
}

//notice popup
const noticeList = document.querySelectorAll(".notice ul li");
const popUp = document.getElementById("pop-up");
const popUpTitle = document.querySelector(".pop-title");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", ()=>{
  popUp.style.visibility = "hidden";
})

noticeList.forEach((list)=>{
  list.addEventListener("click", (e)=>{
    popUp.style.visibility = "visible";
    popUpTitle.innerHTML = e.target.innerText;
  })
})