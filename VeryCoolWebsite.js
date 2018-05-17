var src = document.createAttribute('src');
src.value = "Pics/riku.jpg";


document.getElementById("riku").onmouseover = function() {mouseOver()};
document.getElementById("riku").onmouseout = function() {mouseOut()};

function mouseOver() {
battle.play();
}

function mouseOut() {
  battle.pause();
}
var battle = new Audio('Sounds/battle.mp3')
var snd = new Audio('Sounds/give_it_all.mp3');
snd.play();
