const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const reactionImg = document.getElementById("reactionImg");

let yesSize = 18; // starting font size

noBtn.addEventListener("click", () => {
  // Move NO button randomly
  const x = Math.random() * 400 - 200;
  const y = Math.random() * 300 - 150;

  noBtn.style.position = "absolute";
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // Grow YES button
  yesSize += 12;
  yesBtn.style.fontSize = yesSize + "px";
  yesBtn.style.padding = `${yesSize / 2}px ${yesSize}px`;

  // Change GIF on NO
  reactionImg.src = "assets/if-no.gif";

  // Optional: hide NO if YES gets huge
  if (yesSize > 150) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yay! You said YES 💖🥰";

  // Change GIF on YES
  reactionImg.src = "assets/yes-plz.gif";
});
