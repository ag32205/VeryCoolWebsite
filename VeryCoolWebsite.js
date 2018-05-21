var src = document.createAttribute('src');
src.value = "Pics/riku.jpg";


document.getElementById("riku").onmouseover = function() {mouseOver()};
document.getElementById("riku").onmouseout = function() {mouseOut()};

document.getElementById("duck").onmouseover = function() {mouseOver2()};
document.getElementById("duck").onmouseout = function() {mouseOut2()};


function mouseOver() {
battle.play();
}

function mouseOut() {
  battle.pause();
}

function mouseOver2() {
quack.play();
}

function mouseOut2() {
  quack.pause();
}
var battle = new Audio('Sounds/battle.mp3')
var quack = new Audio('Sounds/donald.mp3')
var snd = new Audio('Sounds/give_it_all.mp3');
snd.play();
