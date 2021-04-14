let sliders = document.getElementById("testimony-wrapper");
let items = document.querySelectorAll(".card-testi");
let container = document.querySelector(".container-testi");
let next = document.getElementById("next-btn");
let prev = document.getElementById("prev-btn");

const slideToLeft = () => {
  let scrollVal = container.scrollWidth / 2;
  sliders.scrollLeft += scrollVal;
  console.log("container width", container.clientWidth / 2);
};
const slideToRight = () => {
  // console.log("to right", sliders.scrollLeft);
  // console.log("to right", items);
  sliders.scrollLeft -= 40;
};

prev.addEventListener("click", slideToRight);
next.addEventListener("click", slideToLeft);
