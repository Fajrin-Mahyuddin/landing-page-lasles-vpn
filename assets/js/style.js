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

let nav = document.querySelector(`nav`);
let hamburger = document.getElementById(`hamburger`);
let close = document.getElementById(`close`);
let menus = document.querySelector(`.menu`);
let nav_menu = document.querySelectorAll(`.nav-menu li a`);

hamburger.addEventListener("click", () => {
  menus.style.transform = "translateX(0)";
  nav.classList.add("dark");
  disableScroll();
});

close.addEventListener("click", () => {
  menus.style.transform = "translateX(100%)";
  nav.classList.remove("dark");
  enableScroll();
});

window.onclick = (e) => {
  let target = e.target.classList.item(0);
  if (target === "nav-link" || target === "nav") {
    menus.style.transform = "translateX(100%)";
    nav.classList.remove("dark");
    enableScroll();
  }
};

window.onscroll = () => {
  if (window.pageYOffset > nav.offsetTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
