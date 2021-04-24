"use strict";

// Map slider
let position = 0;
const sliderContainerMap = document.querySelector(".slider");
const sliderTrackMap = document.querySelector(".zoos-pets-slider");
const sliderItemMap = document.querySelectorAll(".map-pets-item");
const btnLeftMap = document.querySelector(".btn-left-zoos");
const btnRightMap = document.querySelector(".btn-right-zoos");
const slidesToScrollMap = 1;
const itemsCountMap = sliderItemMap.length;
const itemWidthMap = 157;
const movePositionMap = slidesToScrollMap * itemWidthMap;

btnRightMap.addEventListener("mousedown", () => {
  const itemsLeftMap = itemsCountMap - (Math.abs(position) + itemWidthMap) / itemWidthMap;
  position -= itemsLeftMap >= slidesToScrollMap ? movePositionMap : itemsLeftMap * itemWidthMap;
  setPositionMap();
});
btnLeftMap.addEventListener("mousedown", () => {
  const itemsLeftMap = Math.abs(position) / itemWidthMap;
  position += itemsLeftMap >= slidesToScrollMap ? movePositionMap : itemsLeftMap * itemWidthMap;
  setPositionMap();
});

const setPositionMap = () => {
  sliderTrackMap.style.transform = `translateY(${position}px)`;
};
