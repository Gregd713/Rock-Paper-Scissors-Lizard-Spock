"use strict"
const prompt = require("prompt-sync")();
const{Hand}=require("./hands")

class Computer extends Hand{

    constructor(){
    var computerChoice=Math.floor(Math.random()*5)+1;
    if(computerChoice==1){
        computerChoice="rock";}
    else if(computerChoice==2){
        computerChoice="paper";}
    else if(computerChoice==3){
        computerChoice="scissors"}
    else if(computerChoice==4){
        computerChoice="lizard"}
    else if(computerChoice==5){
        computerChoice="spock"}
        super(computerChoice)
    }
    score(addPoint){
        addPoint.Score = this.Score + this.scored;
        console.log(`Computer has won this round. Rounds won: ${this.Score} `)
}
}

module.exports = {
    Computer: Computer
}