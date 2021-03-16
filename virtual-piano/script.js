"use strict";

const piano = document.querySelector(".piano");
const pianoКeys = document.querySelectorAll(".piano-key");

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}
function codeButton(event) {
  let src = ``;
  switch (event) {
    case "KeyC":
      src = `assets/audio/c.mp3`;
      break;

    case "KeyD":
      src = `assets/audio/d.mp3`;
      break;

    case "KeyE":
      src = `assets/audio/e.mp3`;
      break;

    case "KeyF":
      src = `assets/audio/f.mp3`;
      break;

    case "KeyG":
      src = `assets/audio/g.mp3`;
      break;

    case "KeyA":
      src = `assets/audio/a.mp3`;
      break;

    case "KeyB":
      src = `assets/audio/b.mp3`;
      break;

    case "KeyR":
      src = `assets/audio/c♯.mp3`;
      break;

    case "KeyT":
      src = `assets/audio/d♯.mp3`;
      break;

    case "KeyU":
      src = `assets/audio/f♯.mp3`;
      break;

    case "KeyI":
      src = `assets/audio/g♯.mp3`;
      break;

    case "KeyO":
      src = `assets/audio/a♯.mp3`;
      break;
    default:
      src = ` `;
      break;
  }
  playAudio(src);
}

piano.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("piano-key")) {
    pianoКeys.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
    event.target.classList.add("active");
  }
  codeButton(event.target.dataset.code);
});

window.addEventListener("keydown", (event) => {
  let key = document.querySelector(`.piano-key[data-code="${event.code}"]`);
  if (key !== null) {
    if (key.classList.contains("piano-key")) {
      pianoКeys.forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
    }
    key.classList.add("active");
    codeButton(event.code);
  }
});

// notes letters
const btnNotes = document.querySelector(".btn-container");
const btn = document.querySelectorAll(".btn");
const btnLetters = document.querySelector(".btn-letters");
const btnNote = document.querySelector(".btn-notes");

btnNotes.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("btn")) {
    btn.forEach((el) => {
      if (el.classList.contains("btn-active")) {
        el.classList.remove("btn-active");
      }
    });
    event.target.classList.add("btn-active");
  }
});

btnLetters.addEventListener("mousedown", (event) => {
  pianoКeys.forEach((elem) => {
    elem.classList.add("letter-add");
  });
});

btnNote.addEventListener("mousedown", (event) => {
  pianoКeys.forEach((elem) => {
    elem.classList.remove("letter-add");
  });
});
