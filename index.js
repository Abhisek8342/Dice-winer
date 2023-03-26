var randomNumber1=Math.floor(Math.random()*6)+1;
// var images=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png",];
var randomDiceImages1= "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImages1);
//for second player
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImages2="dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImages2);
if (randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML="Draw!";
} else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}else{
    document.querySelector("h1").innerHTML="Player 2 won! 🚩";
}