"use strict"
const prompt = require("prompt-sync")();
const {Fighter} = require("./Fighter");

class Dinosaur extends Fighter{

    constructor(){
        console.log("Please choose your hand");
        let dinoName = prompt();
        super(dinoName);
    }

    hand(opposingFighter){
        opposingFighter.health = opposingFighter.health - this.attackPower;
        console.log(`${this.name} the Dinosaur attacked with a BITE for ${this.attackPower} damage!!`);
    } 
}

module.exports = {
    Dinosaur: Dinosaur
}