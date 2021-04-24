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
let position = 0;
const sliderContainerMap = document.querySelector(".slider");
const sliderTrackMap = document.querySelector(".map-pets-slider");
const sliderItemMap = document.querySelectorAll(".map-pets-item");
const btnLeftMap = document.querySelector(".btn-left-map");
const btnRightMap = document.querySelector(".btn-right-map");
const slidesToShowMap = 4;
const slidesToScrollMap = 1;
const itemsCountMap = sliderItemMap.length;
const itemWidthMap = sliderItemMap.length;
const movePositionMap = slidesToScrollMap * itemWidthMap;
sliderItemMap.forEach((el) => {
  el.style.minWidth = `${itemWidthMap}px`;
});

btnRightMap.addEventListener("mousedown", () => {
  const itemsLeftMap = itemsCountMap - (Math.abs(position) + slidesToShowMap * itemWidthMap) / itemWidthMap;
  position -= itemsLeftMap >= slidesToScrollMap ? movePositionMap : itemsLeftMap * itemWidthMap;
  setPositionMap();
  checkBtnsMap();
});
btnLeftMap.addEventListener("mousedown", () => {
  const itemsLeftMap = Math.abs(position) / itemWidthMap;
  position += itemsLeftMap >= slidesToScrollMap ? movePositionMap : itemsLeftMap * itemWidthMap;
  setPositionMap();
  checkBtnsMap();
});

const setPositionMap = () => {
  sliderTrackMap.style.transform = `translateX(${position}px)`;
};
const checkBtnsMap = () => {
  btnRightMap.dissabled = position === 0;
  btnLeftMap.dissabled = position <= -(itemsCountMap - slidesToShowMap) * itemWidthMap;
};
checkBtnsMap();
