"use strict";

// Map page
const activeMapAnimal = document.querySelector(".map-animals");
let activeImg = document.querySelectorAll(".red-img-none");
let visibleImg = document.querySelectorAll(".active-img");
activeMapAnimal.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("active-img")) {
    if (!event.target.classList.contains("red-img-none") && !event.target.classList.contains("img-visible")) {
      activeImg.forEach((el) => {
        el.classList.remove("img-visible");
        el.classList.add("red-img-none");
      });
      visibleImg.forEach((el) => {
        el.classList.remove("red-img-none");
      });
      let redImg = event.target.nextElementSibling;
      event.target.classList.add("red-img-none");
      redImg.classList.remove("red-img-none");
      redImg.classList.add("img-visible");
    }
  }
});

// Map slider
const sliderContainerMap = document.querySelector(".slider");
const widthMapPageImg = document.querySelector(".map-pets-item");
const sliderItemMap = document.querySelectorAll(".map-pets-item");
const sliderTrackMapPage = document.querySelector(".map-pets-slider");
let inputMapPage = document.querySelector(".input-map-page");
let outputMapPage = document.querySelector(".output-map-page");
const btnLeftMap = document.querySelector(".btn-left-map");
const btnRightMap = document.querySelector(".btn-right-map");

btnRightMap.addEventListener("mousedown", () => {
  if (Number(inputMapPage.value) < sliderItemMap.length) {
    inputMapPage.value = Number(inputMapPage.value) + 1;
    positionMapPage();
  }
});
btnLeftMap.addEventListener("mousedown", () => {
  if (Number(inputMapPage.value) > 0) {
    inputMapPage.value = Number(inputMapPage.value) - 1;
    positionMapPage();
  }
});

const positionMapPage = () => {
  let itemMapPage = document.querySelector(".map-pets-item").clientWidth;
  let positionMapPage = 0 + -(itemMapPage * (Number(inputMapPage.value) - 1));
  sliderTrackMapPage.style.transform = `translateX(${positionMapPage}px)`;
  if (
    widthMapPageImg.clientWidth * Math.ceil(sliderContainerMap.clientWidth / widthMapPageImg.clientWidth) <
    sliderTrackMapPage.clientWidth + positionMapPage
  ) {
  }
  outputMapPage.value = "0" + inputMapPage.value + "/";
};
positionMapPage();
