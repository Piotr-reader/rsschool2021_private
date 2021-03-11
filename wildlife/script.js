"use strict";

let images = document.querySelectorAll(".slider_cart ");
let showSlider = document.querySelector(".show__items");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let x = 0;
let y = 0;
let z = 0;


prev.onclick = function () {
for (let i=0; i <images.length; i++) {
  images[i].style.display = "none";
}
x--;
y = x+1;
z = y+1;

if (x < 0) {
  x = images.length - 1;
}
if (y === images.length - 1) {
  z = 0;
}
showSlider.innerHTML = images[x].innerHTML + images[y].innerHTML + images[z].innerHTML;
};

next.onclick = function () {
for (let i=0; i <images.length; i++) {
  images[i].style.display = "none";
}
z--;
y = z+1;
x = y+1;

if (z < 0 ) {
  z = images.length-1;
}
if (y === images.length-1) {
  x = 0;
}
showSlider.innerHTML = images[z].innerHTML + images[y].innerHTML + images[x].innerHTML;
};

