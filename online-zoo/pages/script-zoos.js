"use strict";

// Map slider
const sliderContainerMap = document.querySelector(".slider");
const sliderTrackMap = document.querySelector(".zoos-pets-slider");
const itemMapHeight = document.querySelector(".map-pets-item");
const sliderItemMap = document.querySelectorAll(".map-pets-item");
const btnUpZoos = document.querySelector(".btn-left-zoos");
const btndownZoos = document.querySelector(".btn-right-zoos");
const mapPetsItemVisible = document.querySelector(".map-pets-item-visible").clientHeight;
const sliderHeight = sliderContainerMap.clientHeight;
let newItemVisebleValue = null;

// slider map page
btnUpZoos.addEventListener("mousedown", () => {
  sliderItemMap.forEach((item) => {
    if (item.firstElementChild.classList.contains('inner-img-visible')) {
      item.classList.remove('inner-img-visible');
      newItemVisebleValue =  Number(item.dataset.value) - 1;
      if (newItemVisebleValue < 1) {
       newItemVisebleValue = 1;
      }
    }
  });
  mapAddActiveImg();
  positionMapPage();
});

btndownZoos.addEventListener("mousedown", () => {
    sliderItemMap.forEach((item) => {
      if (item.firstElementChild.classList.contains('inner-img-visible')) {
        item.classList.remove('inner-img-visible');
        newItemVisebleValue =  Number(item.dataset.value) + 1;
        if (newItemVisebleValue > sliderItemMap.length) {
          newItemVisebleValue = sliderItemMap.length;
        }
      }
    });
    mapAddActiveImg();
    positionMapPage();
});
const mapRemoveActiveImg = () => {
  sliderItemMap.forEach((item) => {
    item.firstElementChild.classList.remove("inner-img-visible");
    item.lastElementChild.classList.remove("img-wrapper-visible");
  });
};
const mapAddActiveImg = () => {
  sliderItemMap.forEach((item) => {
    if (Number(item.dataset.value) === newItemVisebleValue) {
      mapRemoveActiveImg();
      item.classList.add('map-pets-item-visible');
      item.firstElementChild.classList.add("inner-img-visible")
      item.lastElementChild.classList.add("img-wrapper-visible");
    }
  });
};

const positionMapPage = () => {
  let positionMapPage = 0 - mapPetsItemVisible * newItemVisebleValue;
  if (positionMapPage <= -sliderHeight) {
    sliderTrackMap.style.transform = `translateY(${positionMapPage + sliderHeight}px)`;
  }
  if (positionMapPage > -sliderHeight) {
    sliderTrackMap.style.transform = `translateX(0px)`;
  }
};




