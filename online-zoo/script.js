"use strict";

const firstScreenItem = document.querySelectorAll(".small-slider-item");
const firstScreenContainer = document.querySelectorAll(".container-zoo-small");
const petsInZooContainer = document.querySelectorAll(".item-container");
const testimonialPerson = document.querySelectorAll(".testimonial-person");
const howItWorksItem = document.querySelectorAll(".top-item");

// Map page
const activeMapAnimal = document.querySelector(".map-animals");
const activeImg = document.querySelectorAll(".red-img-none");
const visibleImg = document.querySelectorAll(".active-img");
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

// slider testimonial
let position = 0;
const sliderContainer = document.querySelector(".testimonials-card");
const sliderTrack = document.querySelector(".person-container");
const btnLeft = document.querySelector(".btn-left-testimonial");
const btnRight = document.querySelector(".btn-right-testimonial");
const slidesToShow = 2;
const slidesToScroll = 1;
const itemsCount = testimonialPerson.length;
const itemWidth = sliderContainer.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
testimonialPerson.forEach((el) => {
  el.style.minWidth = `${itemWidth}px`;
});

btnRight.addEventListener("mousedown", () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});
btnLeft.addEventListener("mousedown", () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  sliderTrack.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
  btnRight.dissabled = position === 0;
  btnLeft.dissabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
checkBtns();

// slider PetsInZoo
const sliderContainerZoo = document.querySelector(".slider-zoo");
const sliderTrackZoo = document.querySelector(".slider-list");
const slideItemZoo = document.querySelectorAll(".slider-list-item");
const btnLeftZoo = document.querySelector(".btn-left-zoo");
const btnRightZoo = document.querySelector(".btn-right-zoo");
const slidesToShowZoo = 4;
const slidesToScrollZoo = 1;
const itemsCountZoo = slideItemZoo.length;
const itemWidthZoo = sliderContainerZoo.clientWidth / slidesToShowZoo;
const movePositionZoo = slidesToScrollZoo * itemWidthZoo;
slideItemZoo.forEach((el) => {
  el.style.minWidth = `${itemWidthZoo - 23}px`;
});
petsInZooContainer.forEach((el) => {
  el.style.minWidth = `${itemWidthZoo - 23}px`;
});

btnRightZoo.addEventListener("mousedown", () => {
  const itemsLeft = itemsCountZoo - (Math.abs(position) + slidesToShowZoo * itemWidthZoo) / itemWidthZoo;
  position -= itemsLeft >= slidesToScrollZoo ? movePositionZoo : itemsLeft * itemWidthZoo;
  setPositionZoo();
  checkBtnsZoo();
});
btnLeftZoo.addEventListener("mousedown", () => {
  const itemsLeft = Math.abs(position) / itemWidthZoo;
  position += itemsLeft >= slidesToScrollZoo ? movePositionZoo : itemsLeft * itemWidthZoo;
  setPositionZoo();
  checkBtnsZoo();
});

const setPositionZoo = () => {
  sliderTrackZoo.style.transform = `translateX(${position}px)`;
};
const checkBtnsZoo = () => {
  btnRightZoo.dissabled = position === 0;
  btnLeftZoo.dissabled = position <= -(itemsCountZoo - slidesToShowZoo) * itemWidthZoo;
};
checkBtnsZoo();
