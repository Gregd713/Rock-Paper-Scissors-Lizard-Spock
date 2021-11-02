"use strict";
console.log("Rock, Paper, Scissors, Lizard, Spock")
const prompt =require("prompt-sync")();
const {Singleplayer} = require("./gameSelection");
mainMenu();

function mainMenu(){
    var gameType= parseInt(prompt("Would you like to play Single Player or Multiplayer?"+"\n1. Single Player"+"\n2. Multiplayer"+"\nPlease enter numerical value for your choice."));
    if(gameType===1){
        Singleplayer();
    }
    else if(gameType===2){
        multiplayer();
    }
    else{console.log("Invalid entry");
    mainMenu();}
}