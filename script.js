const select = {
  menu: document.getElementById("menu"),
  gametable: document.getElementById("gametable"),
  scoreboard: document.getElementById("scoresec"),
  play: document.getElementById("play"),
  instruction : document.getElementById("inst"),
  score: document.getElementById("score"),
  hiscore: document.getElementById("hiscore"),
  selection: document.getElementById("selection"),
  message: document.getElementById("message"),
  again: document.getElementById("again"),
  gametablebtns: document.getElementById("gametablebtns"),
}
let score = 9;
let win = false;
let guess = Math.floor(Math.random()*9);
let usrchoice = 0;
let hiscore =0;

select.play.addEventListener("click",()=>{
select.menu.style.display="none";
select.gametable.style.display="";
select.scoreboard.style.display="";
});

function clickcheck(btnnum,choice)
{
if(score==0){
  select.message.innerHTML="Game Over!! You Lose";
  select.gametablebtns.style.display="none";
  select.again.style.display = "";
  if(score>hiscore){
    hiscore = score;
  }
  select.hiscore.innerHTML="HiScore: "+ hiscore;
}
else if(btnnum!= guess)
{
score--;
select.score.innerHTML = "Score: " + score;
select.selection.innerHTML = choice;
select.message.innerHTML = "Wrong Guess Try Again"
}
else{
  select.selection.innerHTML = choice;
  select.message.innerHTML="Correct Guess!! You Win"
  select.gametablebtns.style.display="none";
  select.again.style.display = "";
  if(score>hiscore){
    hiscore = score;
  }
  select.hiscore.innerHTML="HiScore: "+ hiscore;
}
}
select.again.addEventListener("click",()=>{
  select.gametablebtns.style.display="";
  select.again.style.display="none";
  select.message.innerHTML="Guess The Heart";
  select.selection.innerHTML="❓";
  score=9;
  select.score.innerHTML = "Score: " + score;
  guess = Math.floor(Math.random()*9);
})