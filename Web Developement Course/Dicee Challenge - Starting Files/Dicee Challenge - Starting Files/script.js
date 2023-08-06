var randomNumber1 = Math.random()*6;
var randomNumber1 = Math.ceil(randomNumber1);

var newDiceImg1 = "images/dice"+randomNumber1+".png"

var newImg1 = document.querySelectorAll("img")[0];
newImg1.setAttribute("src", newDiceImg1);

var randomNumber2 = Math.random()*6;
var randomNumber2 = Math.ceil(randomNumber2);

var newDiceImg2 = "images/dice"+randomNumber2+".png"

var newImg2 = document.querySelectorAll("img")[1];
newImg2.setAttribute("src", newDiceImg2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    var win = document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    var win = document.querySelector("h1").innerHTML = "It's a draw";
}