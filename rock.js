"use strict"
const prompt = require("prompt-sync")();
const{Hand}=require("./hands")

class Human extends Hand{

    constructor(){
    var handType= console.log("What hand are you playing"+"\n1. Rock"+"\n2. Paper"+"\n3. Scissors"+"\n4. Lizard"+"\n5. Spock"+"\nPlease enter the numerical value for entry");
    handType=prompt();
    super(handType)
}
score(addPoint){
    addPoint.Score = this.Score + 1;
    console.log(`Player who chose ${this.name} has won this round. Rounds won: ${this.Score} `)
}
}


module.exports = {
    Human: Human
}