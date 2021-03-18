"use strict";

// play Audio
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

// mouse functions
const mouseBtnEl = () => {
  pianoКeys.forEach((el) => {
    el.classList.remove(
      "piano-key-active",
      "piano-key-pressed",
      "piano-key-active-pseudo"
    );
    el.classList.add("piano-key-remove-mouse");
  });
};
const mouseBtnEvent = (event) => {
  event.target.classList.remove("piano-key-remove-mouse");
  event.target.classList.add(
    "piano-key-active",
    "piano-key-pressed",
    "piano-key-active-pseudo"
  );
  codeButton(event.target.dataset.code);
};

window.addEventListener("mouseup", (el) => {
  mouseBtnEl(el);
});
piano.addEventListener("mousedown", (event) => {
  if (event.which == 1) {
    mouseBtnEvent(event);
  }
});
piano.addEventListener("mouseover", (event) => {
  if (!event.target.classList.contains("piano")) {
    pianoКeys.forEach((el) => {
      if (el.classList.contains("piano-key-active-pseudo")) {
        mouseBtnEl(el);
        mouseBtnEvent(event);
      }
    });
  }
});
piano.addEventListener("mouseout", (event) => {
  event.target.classList.remove("piano-key-active", "piano-key-pressed");
});

// keyboard function
window.addEventListener("keydown", (event) => {
  let key = document.querySelector(`.piano-key[data-code="${event.code}"]`);
  if (key !== null && !event.repeat) {
    if (key.classList.contains("piano-key-remove-mouse")) {
      pianoКeys.forEach((el) => {
        if (el.classList.contains("piano-key-active")) {
          el.classList.remove("piano-key-remove-mouse");
        }
      });
    }
    key.classList.add("piano-key-active");
    key.classList.add("piano-key-active-pseudo");
    codeButton(event.code);
  }
});

window.addEventListener("keyup", (event) => {
  let key = document.querySelector(`.piano-key[data-code="${event.code}"]`);
  if (key !== null) {
    pianoКeys.forEach((el) => {
      el.classList.add("piano-key-remove-mouse");
      el.classList.remove("piano-key-active");
      el.classList.remove("piano-key-active-pseudo");
    });
  }
});

// switch notes letters

const btnLetters = document.querySelector(".btn-letters");
const btnNote = document.querySelector(".btn-notes");

btnLetters.addEventListener("mousedown", (event) => {
  event.target.classList.add("btn-active");
  btnNote.classList.remove("btn-active");
  pianoКeys.forEach((elem) => {
    elem.classList.add("letter-add");
  });
});
btnNote.addEventListener("mousedown", (event) => {
  event.target.classList.add("btn-active");
  btnLetters.classList.remove("btn-active");
  pianoКeys.forEach((elem) => {
    elem.classList.remove("letter-add");
  });
});

// fullScreen
const fullScreen = document.querySelector(".fullscreen");
const elem = document.documentElement;

fullScreen.addEventListener("mousedown", (event) => {
  if (document.fullscreenElement === null) {
    elem.requestFullscreen();
  } else {
    document.exitFullscreen()
  }
});

