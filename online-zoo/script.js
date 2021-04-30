"use strict";

const firstScreenItem = document.querySelectorAll(".small-slider-item");
const firstScreenContainer = document.querySelectorAll(".container-zoo-small");
const sliderSmall = document.querySelector(".small-slider");
const sliderListImg = document.querySelectorAll(".small-slider-item");

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

// slider PetsInZoo
const itemWidthZoo = document.querySelector(".slider-zoo");
const smallSliderLength = document.querySelectorAll(".small-slider-item").length;
const widthZooImg = document.querySelector(".slider-list-item").clientWidth;
let inputPetsInZoo = document.querySelector(".pets-in-zoo-input");
let outputPetsInZoo = document.querySelector(".pets-in-zoo-output");
const sliderTrackZoo = document.querySelector(".slider-list");
const btnLeftZoo = document.querySelector(".btn-left-zoo");
const btnRightZoo = document.querySelector(".btn-right-zoo");

btnRightZoo.addEventListener("mousedown", () => {
  if (Number(inputPetsInZoo.value) < smallSliderLength) {
    inputPetsInZoo.value = Number(inputPetsInZoo.value) + 1;
    positinPetsInZoo();
  }
});
btnLeftZoo.addEventListener("mousedown", () => {
  if (Number(inputPetsInZoo.value) > 0) {
    inputPetsInZoo.value = Number(inputPetsInZoo.value) - 1;
    positinPetsInZoo();
  }
});
itemWidthZoo.addEventListener("mouseover", (event) => {
  petsInZooContainer.forEach((item) => item.classList.remove("visible"));
});
const positinPetsInZoo = () => {
  let positionPetsInZoo = document.querySelector(".slider-list-item").clientWidth;
  let positionPetsInZooCount = 0 + -(positionPetsInZoo * (Number(inputPetsInZoo.value) - 1));
  if (-(widthZooImg * 5) < positionPetsInZooCount) {
    sliderTrackZoo.style.transform = `translateX(${positionPetsInZooCount}px)`;
  }
  outputPetsInZoo.value = "0" + inputPetsInZoo.value + "/";
  petsInZooContainer.forEach((item) => item.classList.remove("visible"));
  petsInZooContainer[Number(inputPetsInZoo.value) - 1].classList.add("visible");
};
positinPetsInZoo();

// firstScreen slider
let inputFirstScreen = document.querySelector(".first-screen-inputs");
let outputFirstScreen = document.querySelector(".first-screen-outputs");
sliderListImg.forEach((item) =>{
  item.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains("slider-list-img")) {
      const widthSmallImg = document.querySelector(".small-slider-item").clientWidth;
      let dataNumber = widthSmallImg + -(widthSmallImg * (event.target.dataset.position - 1));
      sliderSmall.style.transform = `translateX(${dataNumber}px)`;
      firstScreenItem.forEach((item) => item.classList.remove("slider-active"));
      firstScreenContainer.forEach((item) => item.classList.remove("visible-small"));
      firstScreenItem[event.target.dataset.position - 1].classList.add("slider-active");
      firstScreenContainer[event.target.dataset.position - 1].classList.add("visible-small");
      inputFirstScreen.value = event.target.dataset.position;
      outputFirstScreen.value = "0" + event.target.dataset.position + "/";
    }
  })
})

// slider testimonial
const cardTestmonial = document.querySelector(".testimonials-card");
const testimonialPersonLength = document.querySelectorAll(".testimonial-person").length;
const widthTestimonialImg = document.querySelector(".testimonial-person").clientWidth;
let inputTestmonial = document.querySelector(".input-testmonial");
let outputTestmonial = document.querySelector(".output-testmonial");
const sliderTrack = document.querySelector(".person-container");
const btnLeft = document.querySelector(".btn-left-testimonial");
const btnRight = document.querySelector(".btn-right-testimonial");

btnRight.addEventListener("mousedown", () => {
  if (Number(inputTestmonial.value) < testimonialPersonLength) {
    inputTestmonial.value = Number(inputTestmonial.value) + 1;
    positionTestimonial();
  }
});
btnLeft.addEventListener("mousedown", () => {
  if (Number(inputTestmonial.value) > 0) {
    inputTestmonial.value = Number(inputTestmonial.value) - 1;
    positionTestimonial();
  }
});
cardTestmonial.addEventListener("mouseover", (event) => {
  testimonialPerson.forEach((item) => item.classList.remove("person-visible"));
});
const positionTestimonial = () => {
  let positionTestimonial = document.querySelector(".testimonial-person").clientWidth;
  let positionTestimonialCount = 0 + -(positionTestimonial * (Number(inputTestmonial.value) - 1));
  if (widthTestimonialImg < sliderTrack.clientWidth + positionTestimonialCount) {
    sliderTrack.style.transform = `translateX(${positionTestimonialCount}px)`;
  }
  outputTestmonial.value = "0" + inputTestmonial.value + "/";
  testimonialPerson.forEach((item) => item.classList.remove("person-visible"));
  testimonialPerson[Number(inputTestmonial.value - 1)].classList.add("person-visible");
};
positionTestimonial();
