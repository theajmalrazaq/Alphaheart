// array thats contains guessable emojis

let emojis = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍"];

// initial value of score and highscore

let score = 9;
let highScore = 0;

// function thats picks random emoji from array and generates color using random emoji

function generate() {
  let y = Math.trunc(Math.random() * 9);
  let secretEmoji = emojis[y];
  let generatedColor;
  switch (secretEmoji) {
    case "❤️":
      generatedColor = ["#f8312f", "red"];
      break;
    case "🧡":
      generatedColor = ["#ff6723", "orange"];
      break;
    case "💛":
      generatedColor = ["#fcd53f", "yellow"];
      break;
    case "💚":
      generatedColor = ["#00d26a", "green"];
      break;
    case "💙":
      generatedColor = ["#0074ba", "blue"];
      break;
    case "💜":
      generatedColor = ["#8d65c5", "purple"];
      break;
    case "🤎":
      generatedColor = ["#6d4534", "brown"];
      break;
    case "🖤":
      generatedColor = ["#636363", "black"];
      break;
    case "🤍":
      generatedColor = ["#f4f4f4", "white"];
      break;
  }
  let values = [generatedColor[0], generatedColor[1], secretEmoji];
  return values;
}
let finalValues = generate();

let unknownEmoji = finalValues[2];
let color = finalValues[0];
let alphaheart = finalValues[1];

// function thtas check input and perforn game logic

function search() {
  let value = document.getElementById("userinput").value;

  //  check if input have value or empty
  if (value !== "") {
    document.getElementById("message").textContent = "Put a heart in box 😒";
  }

  // main statement thats checks if user guess right
  else if (value == unknownEmoji || value.toLowerCase() == alphaheart) {
    document.getElementById("message").textContent =
      "Noice  🏅 " + unknownEmoji;
    document.getElementById("message").style.color = color;
    document.getElementById("again").textContent = "Play Again!!";
    if (unknownEmoji == "🤍") {
      document.getElementById("again").style.color = "black";
    }
    document.getElementById("again").style.backgroundColor = color;
    document.getElementById("again").style.display = "";
    document.getElementById("check").style.display = "none";
    if (score > highScore) {
      highScore = score;
      document.getElementById(
        "highscore"
      ).textContent = `HighScore: ${highScore}`;
    }
  }
  // statement thats exicutes when user put wrong value
  else {
    document.getElementById("message").textContent = "Keep Guessing dude";

    document.getElementById("userinput").value = "";
    score--;
    document.getElementById("score").textContent = score;
    if (score == 0) {
      document.getElementById("again").textContent = "Play Again!!";
      document.getElementById("again").style.display = "";
      document.getElementById("check").style.display = "none";
      document.getElementById("message").textContent = "you loose dude";
    }
  }
}

// function to reset values to their inital states

function reset() {
  document.getElementById("userinput").value = "";
  document.getElementById("again").style.color = "";
  document.getElementById("message").textContent = "Start Guessing";
  document.getElementById("message").style.color = "purple";
  document.getElementById("again").textContent = "check";

  finalValues = generate();
  unknownEmoji = finalValues[2];
  color = finalValues[0];
  alphaheart = finalValues[1];
  document.getElementById("score").textContent = 9;
  score = 9;
  document.getElementById("again").style.display = "none";
  document.getElementById("check").style.display = "";
  document.getElementById("message").style.color = "";
}
