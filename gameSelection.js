"Use Strict";
const prompt =require("prompt-sync")();

function singlePlayer(){
    var handType= parseInt(prompt("What hand are you playing"+"\n1. Rock"+"\n2. Paper"+"\n3. Scissors"+"\n4. Lizard"+"\nSpock"+"\nPlease enter the numerical value for entry"));
    if(handType===1){return "Rock"}
    else if(handType===2){return "Paper"}
    else if(handType===3){return "Scissors"}
    var computerChoice=math.random();
    if(computerChoice <0.34){
        computerChoice="rock";}
    else if(computerChoice<=0.67){
        computerChoice="paper";
    }
    else{computerChoice="scissors"}
    
    var compare =function(choice1,choice2){
        if(choice1===choice2){
            return "It's a tie"
        }
        if(choice1==="rock"){
            if(choice2==="scissors"){return"Rock wins!"}
        }else{return "Paper wins!"}
    
    if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins";
        } else {
            if(choice2 === "scissors") {
                return "scissors wins";
        }
    }}
    if(choice1 === "scissors") {
        if(choice2 === "rock") {
            return "rock wins";
        } else {
            if(choice2 === "paper") {
                return "scissors wins";
            }
        }
    }}
console.log("User Choice: " + handType);
console.log("Computer Choice: " + computerChoice);
compare(handType, computerChoice);
}



function multiplayer(){}

module.exports={
    Singleplayer: singlePlayer,
    Multiplayer: multiplayer,
};