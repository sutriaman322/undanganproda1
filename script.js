// Script opsional
console.log("Undangan RAKOR PRODA Kota Banjar siap digunakan");
const music = document.getElementById("bgMusic");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
