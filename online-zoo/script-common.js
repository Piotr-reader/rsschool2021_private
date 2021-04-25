"use strict";

const root = document.querySelector(":root");
const input = document.querySelectorAll("input");
const output = document.querySelectorAll("output");
const mapPetsItem = document.querySelectorAll(".map-pets-item");

// dark thema
const switchDark = document.querySelector(".switch-dark");
function thema(event) {
  if (event.target.name === "switch-dark" && !event.target.classList.contains("dark-active")) {
    event.target.classList.add("dark-active");
    root.style.setProperty(`--text-h4`, `#fefefe`);
    root.style.setProperty(`--color-p`, `#f2f2f2`);
    root.style.setProperty(`--bg-testimonial-card`, `#3c3c3c`);
    root.style.setProperty(`--bg-dark`, `#333333`);
    root.style.setProperty(`--bg-soft`, `#4f4f4f`);
    root.style.setProperty(`--bg-map`, `url(./assets/images/map-1920-dark.jpg)`);
    root.style.setProperty(`--arrow-right`, `url(./assets/icons/arrow-right-dark.png)`);
  } else {
    event.target.classList.remove("dark-active");
    root.style.setProperty(`--text-h4`, null);
    root.style.setProperty(`--color-p`, null);
    root.style.setProperty(`--bg-testimonial-card`, null);
    root.style.setProperty(`--bg-dark`, null);
    root.style.setProperty(`--bg-soft`, null);
    root.style.setProperty(`--bg-map`, null);
    root.style.setProperty(`--arrow-right`, null);
  }
}
switchDark.addEventListener("input", thema);

// popup
const popupOpenSlider = document.querySelectorAll(".donate");
const popupClose = document.querySelector(".popup-close");
popupOpenSlider.forEach((el) =>
  el.addEventListener("mousedown", () => {
    document.querySelector(".popup").classList.add("popup-visible");
  })
);
popupClose.addEventListener("mousedown", () => {
  document.querySelector(".popup").classList.remove("popup-visible");
});
// burger
let burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("mousedown", (event) => {
  event.target.classList.toggle("active-burger");
  document.querySelector(".header-nav").classList.toggle("header-nav-active");
  document.querySelector("body").classList.toggle("body-lock");
});

// checkbox required
document.getElementById("checkbox-form").required = true;

//  input output
function inputValue(event) {
  output.forEach((el) => {
    if (el.name === event.target.name) {
      el.value = "0" + event.target.value + "/";
      switch (event.target.name) {
        case "first-screen":
          const widthSmallImg = document.querySelector(".small-slider-item").clientWidth;
          let positionSmallCount = widthSmallImg + -(widthSmallImg * (event.target.value - 1));
          sliderSmall.style.transform = `translateX(${positionSmallCount}px)`;
          firstScreenItem.forEach((item) => item.classList.remove("slider-active"));
          firstScreenContainer.forEach((item) => item.classList.remove("visible-small"));
          firstScreenItem[event.target.value - 1].classList.add("slider-active");
          firstScreenContainer[event.target.value - 1].classList.add("visible-small");
          break;
        case "map-zoo":
          mapPetsItem.forEach((item) => {
            item.firstElementChild.classList.remove("img-wrapper-visible");
          });
          mapPetsItem[event.target.value - 1].firstElementChild.classList.add("img-wrapper-visible");
          positionMapPage();
          break;
        case "pets-in-zoo":
          positinPetsInZoo();
          break;
        case "testimonial":
          positionTestimonial();
          break;
        case "how-it-works":
          howItWorksItem.forEach((item) => item.classList.remove("top-item-visible"));
          howItWorksItem[event.target.value - 1].classList.add("top-item-visible");
          break;
        default:
          break;
      }
    }
  });
}
input.forEach((event) => event.addEventListener("input", inputValue));

function countLengthOutput() {
  output.forEach((elem) => {
    let doc = document.getElementById(`${elem.dataset.name}`);
    if (doc !== null) {
      elem.value = "0" + doc.childElementCount;
      root.style.setProperty(`--${elem.dataset.name}`, 245 / doc.childElementCount + "px");
    }
  });
}
countLengthOutput();

function countLengthInput() {
  input.forEach((el) => {
    let doc = document.getElementById(`${el.name}`);
    if (doc !== null) {
      el.max = doc.childElementCount;
    }
  });
}
countLengthInput();
