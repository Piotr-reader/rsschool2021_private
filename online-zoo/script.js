"use strict";

const root = document.querySelector(":root");
const input = document.querySelectorAll("input");
const output = document.querySelectorAll("output");
let firstScreenItem = document.querySelectorAll(".small-slider-item");
let mapPetsItem = document.querySelectorAll(".map-pets-item");
let firstScreenContainer = document.querySelectorAll(".container-zoo-small");
let petsInZooContainer = document.querySelectorAll(".item-container");
let testimonialPerson = document.querySelectorAll(".testimonial-person");
let howItWorksItem = document.querySelectorAll(".top-item");

// checkbox required
document.getElementById("checkbox-form").required = true;

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
          mapPetsItem.forEach((item) => {
            item.firstElementChild.classList.remove("img-wrapper-visible");
          });
          mapPetsItem[event.target.value - 1].firstElementChild.classList.add("img-wrapper-visible");
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
          howItWorksItem.forEach((item) => item.classList.remove("top-item-visible"));
          howItWorksItem[event.target.value - 1].classList.add("top-item-visible");
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

// todo  нашел индекс страницы, доделать функцию для сслыки перехода
// btn-slider
const btnSliderTop = document.querySelector(".btn-slider");
if (btnSliderTop !== null) {
  btnSliderTop.addEventListener("mousedown", () => {
    input.forEach((el) => {
      if (el.name === "first-screen") {
        console.log(el.value);
      }
    });
  });
}

// todo добавить стили в css
// dark thema
function thema(event) {
  if (event.target.name === "switch-dark" && !event.target.classList.contains("dark-active")) {
    event.target.classList.add("dark-active");
    root.style.setProperty(`--text-h4`, `#fefefe`);
    root.style.setProperty(`--color-p`, `#f2f2f2`);
    root.style.setProperty(`--bg-testimonial-card`, `#3c3c3c`);
    root.style.setProperty(`--bg-dark`, `#333333`);
    root.style.setProperty(`--bg-soft`, `#4f4f4f`);
    root.style.setProperty(`--bg-map`, `url(./assets/icons/map-dark.svg)`);
    root.style.setProperty(`--arrow-right`, `url(./assets/icons/arrow-right-dark.png)`);
  } else {
    event.target.classList.remove("dark-active");
    root.style.setProperty(`--text-h4`, null);
    root.style.setProperty(`--color-p`, null);
    root.style.setProperty(`--bg-testimonial-card`, null);
    root.style.setProperty(`--bg-dark`, null);
    root.style.setProperty(`--bg-soft`, null);
    root.style.setProperty(`--bg-map`, null);
    root.style.setProperty(`--arrow-right`, null);
  }
}
input.forEach((event) => event.addEventListener("input", thema));

// TODO не работает
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

// zoos page


// burger
let burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener('mousedown', (event) => {
  console.log(event.target);
  event.target.classList.toggle("active-burger");
  document.querySelector(".header-nav").classList.toggle("header-nav-active");
  document.querySelector("body").classList.toggle("body-lock");
})