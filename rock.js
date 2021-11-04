"use strict"
const prompt = require("prompt-sync")();
const{Hand}=require("./hands")

class Human extends Hand{

    constructor(){
        parseInt(console.log("What hand are you playing"+"\n1. Rock"+"\n2. Paper"+"\n3. Scissors"+"\n4. Lizard"+"\n5. Spock"+"\nPlease enter the numerical value for entry"));
        var handType = prompt();
        super(handType);
    }
     hand(){
        if(handType==1){return "rock"}
    else if(handType==2){return "paper"}
    else if(handType==3){return "scissors"}
    else if(handType==4){return "lizard"}
    else if(handType==5){return "spock"}
    } 
}

module.exports = {
    Human: Human
}