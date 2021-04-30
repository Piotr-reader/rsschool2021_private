"use strict";

// Map slider
const sliderContainerMap = document.querySelector(".slider");
const sliderTrackMapPage = document.querySelector(".map-pets-slider");
const widthMapPageImg = document.querySelector(".map-pets-item");
const sliderItemMap = document.querySelectorAll(".map-pets-item");
let inputMapPage = document.querySelector(".input-map-page");
let outputMapPage = document.querySelector(".output-map-page");
const btnLeftMap = document.querySelector(".btn-left-map");
const btnRightMap = document.querySelector(".btn-right-map");



btnRightMap.addEventListener("mousedown", () => {
  if (Number(inputMapPage.value) < sliderItemMap.length) {
    inputMapPage.value = Number(inputMapPage.value) + 1;
    outputMapPage.value = "0" + inputMapPage.value + "/";
    mapRemoveActiveImg();
    mapAddActiveImg();
    positionMapPage();
    animalPlaceholder();
  }
});
btnLeftMap.addEventListener("mousedown", () => {
  if (Number(inputMapPage.value) > 0) {
    inputMapPage.value = Number(inputMapPage.value) - 1;
    outputMapPage.value = "0" + inputMapPage.value + "/";
    mapRemoveActiveImg();
    mapAddActiveImg();
    positionMapPage();
    animalPlaceholder();
  }
});
const positionMapPage = () => {
  let itemMapWidth = document.querySelector(".map-pets-item").clientWidth;
  let sliderWidth = sliderContainerMap.clientWidth;
  let positionMapPage = 0 + -(itemMapWidth * (Number(inputMapPage.value) - 1));
  console.log(positionMapPage);
  if (positionMapPage < -sliderWidth) {
    sliderTrackMapPage.style.transform = `translateX(${positionMapPage + sliderWidth - itemMapWidth}px)`;
  }
  if (positionMapPage > -itemMapWidth) {
    sliderTrackMapPage.style.transform = `translateX(0px)`;
  }
};
const mapRemoveActiveImg = () => {
  mapPetsItem.forEach((item) => {
    item.firstElementChild.classList.remove("inner-img-visible");
    item.lastElementChild.classList.remove("img-wrapper-visible");
  });
}
const mapAddActiveImg = () => {
  sliderItemMap[inputMapPage.value-1].firstElementChild.classList.add("inner-img-visible");
  sliderItemMap[inputMapPage.value-1].lastElementChild.classList.add("img-wrapper-visible");
}

const animalPlaceholder = () => {
  let dataAnimal = sliderItemMap[inputMapPage.value-1].dataset.animal;
  let classPlaceholder = document.querySelectorAll(".map-placeholder");
  classPlaceholder.forEach((el) => {
    el.firstElementChild.classList.remove("red-img-none");
    el.childNodes[3].classList.remove("img-visible");
    if (el.classList.contains(dataAnimal)) {
      el.firstElementChild.classList.add("red-img-none");
      el.childNodes[3].classList.add("img-visible");
    }
  })
}
animalPlaceholder();

// sliderItemMap.forEach((elem) => {
//   elem.addEventListener("click", (el) => {
//       let indexImg = 0;
//       while(elem.previousElementSibling) {
//         elem = elem.previousElementSibling;
//         indexImg++;
//         }
//     mapRemoveActiveImg();
//     animalPlaceholder();
//     el.target.firstElementChild.classList.add("inner-img-visible");
//     el.target.lastElementChild.classList.add("img-wrapper-visible");
//     inputMapPage.value = indexImg + 1;
//     outputMapPage.value = "0" + (indexImg + 1) + "/";
//   })
// })

