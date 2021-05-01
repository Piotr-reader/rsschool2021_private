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
const classPlaceholder = document.querySelectorAll(".map-placeholder");
const btnMapPage = document.getElementById("choose-animal-btn");
const btnMapPageValidation = document.querySelector("#btn-map-validation");


// slider map page
btnRightMap.addEventListener("mousedown", () => {
  if (Number(inputMapPage.value) < sliderItemMap.length) {
    inputMapPage.value = Number(inputMapPage.value) + 1;
    outputMapPage.value = "0" + inputMapPage.value + "/";
  } else {
    sliderTrackMapPage.style.transform = `translateX(0px)`;
    outputMapPage.value = "01/";
    inputMapPage.value = 1;
  }
  mapRemoveActiveImg();
  mapAddActiveImg();
  positionMapPage();
  animalPlaceholder();
});
btnLeftMap.addEventListener("mousedown", () => {
  if (Number(inputMapPage.value) > 1) {
    inputMapPage.value = Number(inputMapPage.value) - 1;
    outputMapPage.value = "0" + inputMapPage.value + "/";
  } else {
    let itemMapWidth = sliderItemMap.length;
    let sliderWidth = widthMapPageImg.clientWidth;
    sliderTrackMapPage.style.transform = `translateX(${-(sliderWidth * itemMapWidth-sliderContainerMap.clientWidth)}px)`;
    outputMapPage.value = "0" + sliderItemMap.length + "/";
    inputMapPage.value = sliderItemMap.length;
  }
  mapRemoveActiveImg();
  mapAddActiveImg();
  positionMapPage();
  animalPlaceholder();
});
const positionMapPage = () => {
  let itemMapWidth = document.querySelector(".map-pets-item").clientWidth;
  let sliderWidth = sliderContainerMap.clientWidth;
  let positionMapPage = 0 + -(itemMapWidth * (Number(inputMapPage.value) - 1));
  if (positionMapPage <= -sliderWidth) {
    sliderTrackMapPage.style.transform = `translateX(${positionMapPage + sliderWidth - itemMapWidth}px)`;
  }
  if (positionMapPage > -sliderWidth) {
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

// btnMapPageValidation
const validatinMapBtn = () => {
  btnMapPageValidation.classList.add("btn-change-style");
  classPlaceholder.forEach((el) => {
    if (el.firstElementChild.classList.contains("red-img-none")) {
      btnMapPageValidation.classList.remove("btn-change-style");
    }
  });
};
validatinMapBtn();

// change placeholder active
const animalPlaceholder = () => {
  let dataAnimal = sliderItemMap[inputMapPage.value-1].dataset.animal;
  classPlaceholder.forEach((el) => {
    el.firstElementChild.classList.remove("red-img-none");
    el.childNodes[3].classList.remove("img-visible");
    if (el.classList.contains(dataAnimal)) {
      el.firstElementChild.classList.add("red-img-none");
      el.childNodes[3].classList.add("img-visible");
    }
  })
  validatinMapBtn();
}
animalPlaceholder();

// btn src map page
btnMapPage.addEventListener("click", () => {
  classPlaceholder.forEach((el) => {
    let classPlaceholder = el;
    let dataAnimal = sliderItemMap[inputMapPage.value-1].dataset.animal;
    if (classPlaceholder.classList.contains(dataAnimal)) {
      btnMapPage.action = `../pages/${dataAnimal.slice(4, dataAnimal.length)}.html`;
    }
  })
})

// change animal-placeholder
classPlaceholder.forEach((elem) => {
  elem.addEventListener("click", (e) => {
   let classPlaceholder = e.target.parentNode;
   sliderItemMap.forEach((el) =>  {
    el.firstElementChild.classList.remove("inner-img-visible");
    el.childNodes[3].classList.remove("img-wrapper-visible");
    if (classPlaceholder.classList.contains(el.dataset.animal)) {
      el.firstElementChild.classList.add("inner-img-visible");
      el.childNodes[3].classList.add("img-wrapper-visible");
      sliderTrackMapPage.style.transform = `translateX(0px)`;
      inputMapPage.value = el.dataset.value;
      outputMapPage.value = "0" + el.dataset.value + "/";
      animalPlaceholder();
     }
   })
 })
})

// click img slider
sliderItemMap.forEach((elem) => {
  elem.addEventListener("click", (el) => {
    mapRemoveActiveImg();
    el.target.firstElementChild.classList.add("inner-img-visible");
    el.target.lastElementChild.classList.add("img-wrapper-visible");
    inputMapPage.value = el.target.dataset.value;
    outputMapPage.value = "0" + el.target.dataset.value + "/";
    animalPlaceholder();
  })
})

