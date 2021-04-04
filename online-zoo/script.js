"use strict";

const root = document.querySelector(":root");
const input = document.querySelectorAll("input");
const output = document.querySelectorAll("output");
let firstScreenItem = document.querySelectorAll(".small-slider-item");
let mapPetsItem = document.querySelectorAll(".map-pets-item");
let firstScreenContainer = document.querySelectorAll(".container-zoo-small");
let petsInZooContainer = document.querySelectorAll(".pets-in-zoo-item");
let testimonialPerson = document.querySelectorAll(".testimonial-person");
let howItWorksItem = document.querySelectorAll(".how-it-works-item");

//  input output
function inputValue(event) {
  output.forEach((el) => {
    if (el.name === event.target.name) {
      el.value = "0" + event.target.value + "/";
      switch (event.target.name) {
        case "first-screen":
          firstScreenItem.forEach((item) => item.classList.remove("slider-active"));
          firstScreenContainer.forEach((item) => item.classList.remove("visible"));
          firstScreenItem[event.target.value - 1].classList.add("slider-active");
          firstScreenContainer[event.target.value - 1].classList.add("visible");
          break;
        case "map-zoo":
          mapPetsItem.forEach((item) => item.classList.remove("map-pets-item-big"));
          mapPetsItem[event.target.value - 1].classList.add("map-pets-item-big");
          break;
        case "pets-in-zoo":
          petsInZooContainer.forEach((item) => item.classList.remove("visible"));
          petsInZooContainer[event.target.value - 1].classList.add("visible");
          break;
        case "testimonial":
          testimonialPerson.forEach((item) => item.classList.remove("person-visible"));
          testimonialPerson[event.target.value - 1].classList.add("person-visible");
          break;
        case "how-it-works":
          howItWorksItem.forEach((item) => item.classList.remove("how-it-works-item-visible"));
          howItWorksItem[event.target.value - 1].classList.add("how-it-works-item-visible");
          break;
        default:
          break;
      }
    }
  });
}
input.forEach((event) => event.addEventListener("input", inputValue));

function countLengthOutput() {
  output.forEach((elem) => {
    let doc = document.getElementById(`${elem.dataset.name}`);
    if (doc !== null) {
      elem.value = "0" + doc.childElementCount;
      // root.style.setProperty(`--${elem.dataset.name}`, (245/doc.childElementCount) + "px");
    }
  });
}
countLengthOutput();

function countLengthInput() {
  input.forEach((el) => {
    let doc = document.getElementById(`${el.name}`);
    if (doc !== null) {
      el.max = doc.childElementCount;
    }
  });
}
countLengthInput();

// todo добавить стили в css
// dark thema
function thema(event) {
  if (event.target.name === "switch-dark" && !event.target.classList.contains("dark-active")) {
    event.target.classList.add("dark-active");
    root.style.setProperty(`--color-text`, `#fefefe`);
    root.style.setProperty(`--color-dark`, `#333333`);
  } else {
    event.target.classList.remove("dark-active");
    root.style.setProperty(`--color-text`, null);
    root.style.setProperty(`--color-dark`, null);
  }
}
input.forEach((event) => event.addEventListener("input", thema));

// TODO не работает
// const leftPets = document.querySelector(".left-pets");
// const rightPets = document.querySelector(".right-pets");
// let indexItem = 0;
// leftPets.addEventListener('mousedown', () => {
//   input.forEach((event) => {
//     if(event.name === 'pets-in-zoo') {
//       console.log(event.value);
//       if(event.value > 0) {
//         indexItem = event.value--;
//         petsInZooContainer.forEach((item) => item.classList.remove('visible'));
//         petsInZooContainer[indexItem-1].classList.add('visible');
//       } else {
//         petsInZooContainer.forEach((item) => item.classList.remove('visible'));
//         petsInZooContainer[0].classList.add('visible');
//       }

//     }
//   })
// });
// rightPets.addEventListener('mousedown', () => {
//   input.forEach((event) => {
//     if(event.name === 'pets-in-zoo') {
//       indexItem = event.value++;
//       if(indexItem < event.max+1) {
//         petsInZooContainer.forEach((item) => item.classList.remove('visible'));
//         console.log(indexItem);
//         petsInZooContainer[indexItem].classList.add('visible');
//      }
//     }
//   })
// });

const activeMapAnimal = document.querySelector(".active-map-animals");
let activeImg = document.querySelectorAll(".red-img-none");
let visibleImg = document.querySelectorAll(".active-img");
// Map page

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
