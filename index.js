const mainButton = document.getElementById("main_button");
const [main] = document.getElementsByTagName("main");
const [menu] = document.getElementsByClassName("menu");
const pathToAudio = "assets/audio/";
const pathToImage = "assets/img/";
const source = {
  drozd: getPaths("drozd"),
  javoronok: getPaths("javoronok"),
  slavka: getPaths("slavka"),
  solovey: getPaths("solovey"),
  zarynka: getPaths("zarynka"),
};
const audio = new Audio();

let isStart = true;
let currentTime = 0;
let track = "assets/audio/forest.mp3";

if (isStart) {
  mainButton.classList.remove(["button_pause"]);
  main.style.backgroundImage = "url('assets/img/forest.jpg')";
  // playAudio("assets/audio/forest.mp3");
}

mainButton.addEventListener("click", () => {
  const isPlayMusic = mainButton.classList.toggle("button_pause");
  if (isPlayMusic) {
    playAudio(track);
  } else {
    pauseAudio();
  }
});

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav_button")) {
    const [_, birdName] = e.target.classList;
    console.log(source);
    const [sing, image] = source[birdName];
    track = sing;
    currentTime = 0;
    playAudio(sing);
    main.style.backgroundImage = `url(${image})`;
    if (!mainButton.classList.contains("button_pause")) {
      mainButton.classList.add("button_pause");
    }
  }
});

function getPaths(name) {
  return [pathToAudio + name + ".mp3", pathToImage + name + ".jpg"];
}

function playAudio(src) {
  audio.src = src;
  audio.currentTime = currentTime;
  audio.play();
}

function pauseAudio() {
  currentTime = audio.currentTime;
  audio.pause();
}
