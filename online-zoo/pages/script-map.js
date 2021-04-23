// Map slider
const sliderContainerMap = document.querySelector('.slider');
const sliderTrackMap = document.querySelector('.map-pets-slider');
const sliderItemMap = document.querySelectorAll('.map-pets-item');
const btnLeftMap = document.querySelector('.btn-left-map');
const btnRightMap = document.querySelector('.btn-right-map');
const slidesToShowMap = 2;
const slidesToScrollMap = 1;
const itemsCountMap = sliderItemMap.length;
const itemWidthMap = sliderContainerMap.clientWidth / slidesToShowMap;
const movePositionMap = slidesToScrollMap * itemWidthMap;
sliderItemMap.forEach((el) => {
el.style.minWidth = `${itemWidthMap}px`;
})

btnRightMap.addEventListener('mousedown', () => {
  const itemsLeftMap = itemsCountMap - (Math.abs(position) + slidesToShowMap * itemWidthMap) / itemWidthMap;
  position -= itemsLeftMap >= slidesToScrollMap ? movePositionMap : itemsLeftMap * itemWidthMap;
  setPositionMap();
  checkBtnsMap();
})
btnLeftMap.addEventListener('mousedown', () => {
  const itemsLeftMap = Math.abs(position) / itemWidthMap;
  position += itemsLeftMap >= slidesToScrollMap ? movePositionMap : itemsLeftMap * itemWidthMap;
  setPositionMap();
  checkBtnsMap();
})

const setPositionMap = () => {
  sliderTrackMap.style.transform = `translateX(${position}px)`;
}
const checkBtnsMap = () => {
  btnRightMap.dissabled = position === 0;
  btnLeftMap.dissabled = position <= -(itemsCountMap - slidesToShowMap) * itemWidthMap;
}
checkBtnsMap();