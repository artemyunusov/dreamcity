// console.log(2);

const headerMenu = document.querySelector(".header__menu");
const menuClose = document.querySelector(".menu__close");
const svgMap = document.querySelector(".mapping svg");
const span = document.querySelector(".span");
const svgLinks = document.querySelectorAll(".svg__link");

const menu = document.querySelector(".menu");

headerMenu.addEventListener("click", () => {
  menu.classList.add("transform");
})

// menuClose.addEventListener("click", () => {
//   menu.classList.remove("transform");
// })

for(let i =0; i < svgLinks.length; i++){
  svgLinks[i].addEventListener("mouseover", function(e, data){
    data = this.firstElementChild.getAttribute("title");
    span.innerHTML = data;
    
    // func(elem);
    dir(e);
  })
}

function dir(e){
  let x = e.clientX;
  let y = e.clientY;
  span.style.position = "absolute";
  span.style.left = (+x - 20) + "px";
  span.style.top = (+y - 20) + "px";
  console.log(x); 
  console.log(y);
}

function func(elem){
  linksTopage.forEach(element => {
    if(element === elem){
      body.innerHTML = element;
    }
  });
}

// const linksToPage = {
//   UZ-AS: "aral sea",
//   TJ-SU: "surkhandarya",
//   UZ-AN: "andijan",
//   UZ-BU: "bukhara",
//   UZ-FA: "fergana",
//   UZ-JI: "jizzakh",
//   UZ-NG: "namangan",
//   UZ-NW: "nawai",
//   UZ-QA: "kashkadirya",
//   UZ-QR: "karakalpakistan",
//   UZ-SA: "samarkand",
//   UZ-SI: "syrdarya",
//   UZ-SU: "surkhandarya",
//   UZ-TK: "tashkent city",
//   UZ-TO: "tashkent",
//   UZ-XO: "khorazm"
// }