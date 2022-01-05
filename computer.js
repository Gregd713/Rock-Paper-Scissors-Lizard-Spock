"use strict"
const { GamePlayer } = require("./player");

class Computer extends GamePlayer{
    constructor(name){
        super(name);
        this.name = "Computer"
    }
    selectHandGesture(){
        let aiSelection = this.handGestures[Math.floor(Math.random() * this.handGestures.length)];
        console.log(aiSelection);
        return aiSelection;
    }
}   

module.exports = {
    Computer: Computer,
}