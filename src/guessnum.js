let random = Math.round(Math.random() * 100);
console.log(random);
let guessValue = document.getElementById("guess");
let text = document.getElementById("text");
let hint = document.getElementById("hint");

if (random % 2 == 0) {
  hint.innerHTML = "Even Number";
} else {
  hint.innerHTML = "odd number";
}
function guessNum() {
  if (random == guessValue.value) {
    text.innerHTML = "YOU WON!!!";
  } else {
    if (random == 0 || random < 10) {
      text.innerHTML = "Number lies between 0 and 10";
    } else if (random == 10 || random < 20) {
      text.innerHTML = "Number lies between 10 and 20";
    } else if (random == 20 || random < 30) {
      text.innerHTML = "Number lies between 20 and 30";
    } else if (random == 30 || random < 40) {
      text.innerHTML = "Number lies between 30 and 40";
    } else if (random == 40 || random < 50) {
      text.innerHTML = "Number lies between 40 and 50";
    } else if (random == 50 || random < 60) {
      text.innerHTML = "Number lies between 50 and 60";
    } else if (random == 60 || random < 70) {
      text.innerHTML = "Number lies between 60 and 70";
    } else if (random == 70 || random < 80) {
      text.innerHTML = "Number lies between 70 and 80";
    } else if (random == 80 || random < 90) {
      text.innerHTML = "Number lies between 80 and 90";
    } else if (random == 90 || random <= 100) {
      text.innerHTML = "Number lies between 90 and 100";
    } else {
      text.innerHTML = "invalid number";
    }
  }
}
