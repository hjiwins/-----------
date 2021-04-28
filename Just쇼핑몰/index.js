//nav
const mainMenu = document.querySelector(".main-menu");
const subMenu = document.querySelector(".sub-menu");

//carousel
const carouselContainer = document.querySelector(".carousel-container");
const images = document.querySelectorAll(".carousel-container img");
const allImages = images.length;
const imageHeight = images[0].height;
let now = 0;

setInterval(() => {
    carouselSlide();
}, 2000);

function carouselSlide() {
    now=now==(allImages-1)? 0 : now+=1;
    carouselContainer.style.top = `-${imageHeight*now}px`;
}

//notice and gallary
const noticeTitle = document.querySelector(".notice-tap");
const notice = document.querySelector(".notice");
const gallaryTitle = document.querySelector(".gallary-tap");
const gallary = document.querySelector(".gallary");

noticeTitle.addEventListener("click", () => {
  notice.classList.add("tap-on");
  gallary.classList.remove("tap-on");
});

gallaryTitle.addEventListener("click", () => {
  gallary.classList.add("tap-on");
  notice.classList.remove("tap-on");
});

//popup
const noticeList = document.querySelectorAll(".notice ul li");
const popUp = document.getElementById("pop-up");
const popTitle = document.querySelector(".pop-title");
noticeList.forEach((list) => {
  list.addEventListener("click", (e) => {
    popUp.style.display = "block";
    popTitle.innerHTML = `<h2>${e.target.innerText}</h2>`;
    console.log(e.target);
  });
});

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  popUp.style.display = "none";
});
