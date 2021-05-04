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
      item.classList.remove('map-pets-item-visible');
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
        item.classList.remove('map-pets-item-visible');
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

// click img slider
sliderItemMap.forEach((elem) => {
  elem.addEventListener("click", (el) => {
    mapRemoveActiveImg();
    el.target.firstElementChild.classList.add("inner-img-visible");
    el.target.lastElementChild.classList.add("img-wrapper-visible");
  })
})

// video change src
const mainVideo = document.querySelector(".size-video-top");
const additionalVideoContainer = document.querySelector(".additional-video");
const additionalVideos = document.querySelectorAll(".video-non-visible");
const widthAddVideo = document.querySelector(".video-non-visible").clientWidth;
const widthVideoContainer = document.querySelector(".video-container").clientWidth;
additionalVideos.forEach((e) => {
  e.addEventListener('click', (event) => {
    let stack = [];
    stack.push(mainVideo.src);
    mainVideo.src = event.target.firstElementChild.src;
    event.target.firstElementChild.src = stack;
    stack = [];
  });
});

// switcher btn

const switcherBtn = document.querySelectorAll(".switch-circle");
let countVideoOnPage = Math.ceil(widthVideoContainer / widthAddVideo);
switcherBtn.forEach((e) => {
  e.addEventListener('click', (event) => {
    switcherBtn.forEach((e) => {
      e.classList.remove('active-circle');
    });
    event.target.classList.add('active-circle');
    let valueBtn = event.target.dataset.value;
    let moveSlider = -((widthAddVideo*countVideoOnPage)*(valueBtn-1))
    additionalVideoContainer.style.transform = `translateX(${moveSlider}px)`;
  })
})

// set interval
const switcherContainer = switcherBtn.length;
let moveSliderinterval = widthAddVideo * countVideoOnPage;
let count = 0;
const intervalSlider = () => {
  count++;
  if (count > switcherContainer-1) {
    count = 0;
  };
  switcherBtn.forEach((el) => {
    el.classList.remove("active-circle");
  })

  switcherBtn[count].classList.add("active-circle");
  additionalVideoContainer.style.transform = `translateX(${-((widthAddVideo*2)*count)}px)`;
};
setInterval(intervalSlider, 3000);
