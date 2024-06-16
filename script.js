// slection of different elements
const select = {
  menu: document.getElementById("menu"),
  gametable: document.getElementById("gametable"),
  scoreboard: document.getElementById("scoresec"),
  play: document.getElementById("play"),
  instruction: document.getElementById("inst"),
  score: document.getElementById("score"),
  hiscore: document.getElementById("hiscore"),
  selection: document.getElementById("selection"),
  message: document.getElementById("message"),
  again: document.getElementById("again"),
  gametablebtns: document.getElementById("gametablebtns"),
  inputname: document.querySelector(".inputname"),
  victory: document.getElementById("victory").innerHTML,
  losticon: document.getElementById("losticon").innerHTML,
};

// default veriables

let score = 9;
let guess = Math.floor(Math.random() * 9);
let hiscore = 0;

// play button on homescrean function

select.play.addEventListener("click", () => {
  if (select.inputname.value === "") {
    alert("Please Enter Your Name");
  } else {
    select.menu.style.display = "none";
    select.gametable.style.display = "";
    select.scoreboard.style.display = "";
    select.message.innerHTML = `Guess The Heart ${select.inputname.value}`;
  }
});

// function to check user choice

function clickcheck(btnnum, choice) {
  if (btnnum !== guess) {
    score--;
    select.score.innerHTML = "Score: " + score;
    select.selection.innerHTML = choice;
    select.message.innerHTML = "Wrong Guess Try Again";
  } else {
    select.selection.innerHTML = select.victory;
    select.message.innerHTML = `You Won! ${select.inputname.value}`;
    select.gametablebtns.style.display = "none";
    select.again.style.display = "";
    if (score > hiscore) {
      hiscore = score;
    }
    select.hiscore.innerHTML = "HiScore: " + hiscore;
  }
  if (score === 0) {
    select.message.innerHTML = `You Lost! ${select.inputname.value}`;
    select.gametablebtns.style.display = "none";
    select.again.style.display = "";
    select.selection.innerHTML = select.losticon;
  }
}
select.again.addEventListener("click", () => {
  select.gametablebtns.style.display = "";
  select.again.style.display = "none";
  select.message.innerHTML = "Guess The Heart";
  select.selection.innerHTML = "?";
  score = 9;
  select.score.innerHTML = "Score: " + score;
  guess = Math.floor(Math.random() * 9);
});
