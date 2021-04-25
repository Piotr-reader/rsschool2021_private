"use strict";

// Map slider
let position = 0;
const sliderContainerMap = document.querySelector(".slider");
const sliderTrackMap = document.querySelector(".zoos-pets-slider");
const widthMapPageImg = document.querySelector(".map-pets-item");
const sliderItemMap = document.querySelectorAll(".map-pets-item");
const btnLeftMap = document.querySelector(".btn-left-zoos");
const btnRightMap = document.querySelector(".btn-right-zoos");

btnRightMap.addEventListener("mousedown", () => {
  if (position < sliderItemMap.length) {
    position++;
  }
  setPositionMap();
});
btnLeftMap.addEventListener("mousedown", () => {
  if (position > 0) {
    position--;
  }
  setPositionMap();
});

const setPositionMap = () => {
  let itemMapPage = document.querySelector(".img-wrapper-visible").clientHeight;
  let positionMapPage = 0 + -(itemMapPage * position);
  if (0 < sliderTrackMap.clientHeight + positionMapPage) {
    sliderTrackMap.style.transform = `translateY(${positionMapPage}px)`;
  }
};
setPositionMap();
