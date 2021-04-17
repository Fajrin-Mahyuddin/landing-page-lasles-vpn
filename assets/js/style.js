let sliders = document.getElementById("testimony-wrapper");
let items = document.querySelectorAll(".card-testi");
let container = document.querySelector(".container-testi");
let active = document.querySelector(".card-testi.active");
let next = document.getElementById("next-btn");
let prev = document.getElementById("prev-btn");
let dot = document.querySelector(".dot");

let spans;
let counter = 0;

const dots = () => {
  for (let i = 0; i < items.length; i++) {
    dot.insertAdjacentHTML("beforeend", "<span></span>");
  }
  dot.firstChild.classList.add("active");
  spans = document.querySelectorAll(".dot span");
};
dots();

const activeElement = (n_after, n_before) => {
  items[n_before].classList.remove("active");
  items[n_after].classList.add("active");
  items[n_after].scrollIntoViewIfNeeded({
    block: "start",
    inline: "center",
    behavior: "smooth",
  });
};

const slideToLeft = (e) => {
  e.preventDefault();
  if (counter >= items.length - 1) {
    counter = 0;
    activeElement(counter, items.length - 1);
    spans[items.length - 1].classList.remove("active");
    spans[counter].classList.add("active");
  } else {
    counter++;
    spans[counter - 1].classList.remove("active");
    spans[counter].classList.add("active");
    activeElement(counter, counter - 1);
  }
};

const slideToRight = (e) => {
  e.preventDefault();

  console.log(spans);
  if (counter <= 0) {
    counter = items.length - 1;
    activeElement(counter, 0);
    spans[0].classList.remove("active");
    spans[counter].classList.add("active");
  } else {
    counter--;
    activeElement(counter, counter + 1);
    spans[counter + 1].classList.remove("active");
    spans[counter].classList.add("active");
  }
};

prev.addEventListener("click", slideToRight);
next.addEventListener("click", slideToLeft);
