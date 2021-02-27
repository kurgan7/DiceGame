var randomnumber1 =(Math.floor(Math.random()*6)+1);

var randomDiceImage = "dice" + randomnumber1 + ".png"; // dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage ;  //rimages/dice1.png

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImageSource);

var randomnumber2 =(Math.floor(Math.random()*6)+1);

var randomDiceImage2 = "dice" + randomnumber2 + ".png"; // dice1.png-dice6.png

var randomImageSource2 = "images/" + randomDiceImage2 ;  

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomnumber2>randomnumber1)

    document.querySelector("h1").innerHTML = "Player 2 Wins!";

else if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";

}
else{
    document.querySelector("h1").innerHTML = "Draw";
}













