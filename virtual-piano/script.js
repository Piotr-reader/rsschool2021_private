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
window.addEventListener("mouseup", (event) => {
  pianoКeys.forEach((el) => {
    el.classList.add("piano-key-remove-mouse");
    el.classList.remove("piano-key-active");
    el.classList.remove("piano-key-active-pseudo");
    el.classList.remove("piano-key-pressed");
  });
});
piano.addEventListener("mousedown", (event) => {
  pianoКeys.forEach((el) => {
    if (el.classList.contains("piano-key-active")) {
      el.classList.add("piano-key-remove-mouse");
      el.classList.remove("piano-key-active");
      el.classList.remove("piano-key-active-pseudo");
    }
    event.target.classList.remove("piano-key-remove-mouse");
    event.target.classList.add("piano-key-active");
    event.target.classList.add("piano-key-active-pseudo");
    event.target.classList.add("piano-key-pressed");
  });
  codeButton(event.target.dataset.code);
});
piano.addEventListener("mouseover", (event) => {
  if (!event.target.classList.contains("piano")) {
    pianoКeys.forEach((el) => {
      if (el.classList.contains("piano-key-pressed")) {
        el.classList.add("piano-key-remove-mouse");
        el.classList.remove("piano-key-pressed");
        el.classList.remove("piano-key-active");
        el.classList.remove("piano-key-active-pseudo");
        codeButton(event.target.dataset.code);
        event.target.classList.add("piano-key-pressed");
        event.target.classList.add("piano-key-active");
        event.target.classList.add("piano-key-active-pseudo");
      }
    });
  }
});

// keyboard function
window.addEventListener("keydown", (event) => {
  let key = document.querySelector(`.piano-key[data-code="${event.code}"]`);
  if (key !== null) {
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

// fullScreen
const fullScreen = document.querySelector(".fullscreen");
const elem = document.documentElement;

fullScreen.addEventListener("mousedown", (event) => {
  if (document.fullscreenElement === null) {
    openFullscreen();
  } else {
    closeFullscreen();
  }
});
function openFullscreen() {
  elem.requestFullscreen();
}
function closeFullscreen() {
  document.exitFullscreen();
}
