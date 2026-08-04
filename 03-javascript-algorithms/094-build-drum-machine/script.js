const display = document.getElementById("display");
const drumPads = document.querySelectorAll(".drum-pad");

function playSound(key) {
  const audio = document.getElementById(key);

  if (!audio) {
    return;
  }

  const pad = audio.parentElement;

  audio.currentTime = 0;
  audio.play();

  display.textContent = pad.id;

  pad.classList.add("active");

  setTimeout(() => {
    pad.classList.remove("active");
  }, 100);
}

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    playSound(pad.innerText.trim());
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  if ("QWEASDZXC".includes(key)) {
    playSound(key);
  }
});
