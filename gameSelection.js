"Use Strict";
const prompt =require("prompt-sync")();
const {Human}=require("./rock");
const {Human2}=require("./player2");
const{Hand}=require("./hands")
const{Computer}=require("./computer")

function declareWinner(){

}
class mainMenu {

    constructor(){
        this.handOne;
        this.handTwo;
        this.computer;
    }
    displayWelcome(){
        console.log("Let's play rock, paper, scissors, lizard, spock");
    }
    gameSelection(){
        var gameType= parseInt(console.log("Would you like to play Single Player or Multiplayer?"+"\n1. Single Player"+"\n2. Multiplayer"+"\nPlease enter numerical value for your choice."));
        gameType=prompt();
        switch(gameType){
        case "1":
        {
            console.log("You have chosen single player");
            this.handOne =new Human();
            this.computer=new Computer();
            this.singlePlayerGameLogic();
            this.declareVictorSingle();
            break;
        }
        case "2":{
            console.log("You have chosen multiplayer.");
            this.handOne =new Human();
            this.handTwo =new Human2();
            this.multiplayerGameLogic();
            this.declareVictorMultiplayer();
            break;
        }
        default:
            console.log("Invalid entry");
            this.gameSelection();
    }}
    singlePlayerGameLogic(){
        if(this.handOne.name==1){this.handOne.name="rock"}
        else if(this.handOne.name==2){this.handOne.name="paper"}
        else if(this.handOne.name==3){this.handOne.name="scissors"}
        else if(this.handOne.name==4){this.handOne.name="lizard"}
        else{this.handOne.name="spock"}
        console.log(`Player has chosen ${this.handOne.name} and computer has chosen ${this.computer.name}`);
            if(this.handOne.name==this.computer.name){console.log("it's a tie")}
            else if(this.handOne.name=="rock"){if(this.computer.name=="paper"){console.log("Paper wins!"),this.computer.score(this.computer)}
            else if(this.computer.name=="scissors"){console.log("Rock wins"),this.handOne.score(this.handOne)}
            else if(this.computer.name=="lizard"){console.log("Rock wins"),this.handOne.score(this.handOne)}else{console.log("Spock Wins"),this.computer.score(this.computer)}}
            
            else if(this.handOne.name=="scissors"){if(this.computer.name=="rock"){console.log("Rock wins!"),this.computer.score(this.computer)}
            else if(this.computer.name=="paper"){console.log("Scissors wins!"),this.handOne.score(this.handOne)}
            else if(this.computer.name=="lizard"){console.log("Scissors wins!"),this.handOne.score(this.handOne)}else{console.log("Spock wins!"),this.computer.score(this.computer)}}

            else if(this.handOne.name=="paper"){if(this.computer.name=="rock"){console.log("Paper wins!"),this.handOne.score(this.handOne)}
            else if(this.computer.name=="scissors"){console.log("Scissors wins!"),this.computer.score(this.computer)}
            else if(this.computer.name=="lizard"){console.log("Lizard wins!"),this.computer.score(this.computer)}else{console.log("Paper wins!"),this.handOne.score(this.handOne)}}

            else if(this.handOne.name=="lizard"){if(this.computer.name=="rock"){console.log("Rock wins!"),this.computer.score(this.computer)}
            else if(this.computer.name=="paper"){console.log("Lizard wins!"),this.handOne.score(this.handOne)}
            else if(this.computer.name=="scissor"){console.log("Scissors wins!"),this.computer.score(this.computer)}else{console.log("Lizard wins!"),this.handOne.score(this.handOne)}}

            else if(this.handOne.name=="spock"){if(this.computer.name=="rock"){console.log("Spock wins!"),this.handOne.score(this.handOne)}
            else if(this.computer.name=="paper"){console.log("Paper wins!"),this.computer.score(this.computer)}
            else if(this.computer.name=="scissors"){console.log("Spock wins!"),this.handOne.score(this.handOne)}else{console.log("Lizard wins"),this.computer.score(this.computer)}}
            console.log("player score: "+this.handOne.Score);
            console.log("Computer score:"+this.computer.Score)
    }

    multiplayerGameLogic(){
        if(this.handOne.name==1){this.handOne.name="rock"}
        else if(this.handOne.name==2){this.handOne.name="paper"}
        else if(this.handOne.name==3){this.handOne.name="scissors"}
        else if(this.handOne.name==4){this.handOne.name="lizard"}
        else{this.handOne.name="spock"}
        if(this.handTwo.name==1){this.handTwo.name="rock"}
        else if(this.handTwo.name==2){this.handTwo.name="paper"}
        else if(this.handTwo.name==3){this.handTwo.name="scissors"}
        else if(this.handTwo.name==4){this.handTwo.name="lizard"}
        else{this.handTwo.name="spock"}
        console.log(`Player 1 has chosen ${this.handOne.name} and player 2 has chosen ${this.handTwo.name}`);
            if(this.handOne.name==this.handTwo.name){console.log("it's a tie")}
            else if(this.handOne.name=="rock"){if(this.handTwo.name=="paper"){console.log("Paper wins!"),this.handTwo.score(this.handTwo)}
            else if(this.handTwo.name=="scissors"){console.log("Rock wins"),this.handOne.score(this.handOne)}
            else if(this.handTwo.name=="lizard"){console.log("Rock wins"),this.handOne.score(this.handOne)}else{console.log("Spock Wins"),this.handTwo.score(this.handTwo)}}
            
            else if(this.handOne.name=="scissors"){if(this.handTwo.name=="rock"){console.log("Rock wins!"),this.handTwo.score(this.handTwo)}
            else if(this.handTwo.name=="paper"){console.log("Scissors wins!"),this.handOne.score(this.handOne)}
            else if(this.handTwo.name=="lizard"){console.log("Scissors wins!"),this.handOne.score(this.handOne)}else{console.log("Spock wins!"),this.handTwo.score(this.handTwo)}}

            else if(this.handOne.name=="paper"){if(this.handTwo.name=="rock"){console.log("Paper wins!"),this.handOne.score(this.handOne)}
            else if(this.handTwo.name=="scissors"){console.log("Scissors wins!"),this.handTwo.score(this.handTwo)}
            else if(this.handTwo.name=="lizard"){console.log("Lizard wins!"),this.handTwo.score(this.handTwo)}else{console.log("Paper wins!"),this.handOne.score(this.handOne)}}

            else if(this.handOne.name=="lizard"){if(this.handTwo.name=="rock"){console.log("Rock wins!"),this.handTwo.score(this.handTwo)}
            else if(this.handTwo.name=="paper"){console.log("Lizard wins!"),this.handOne.score(this.handOne)}
            else if(this.handTwo.name=="scissor"){console.log("Scissors wins!"),this.handTwo.score(this.handTwo)}else{console.log("Lizard wins!"),this.handOne.score(this.handOne)}}

            else if(this.handOne.name=="spock"){if(this.handTwo.name=="rock"){console.log("Spock wins!"),this.handOne.score(this.handOne)}
            else if(this.handTwo.name=="paper"){console.log("Paper wins!"),this.handTwo.score(this.handTwo)}
            else if(this.handTwo.name=="scissors"){console.log("Spock wins!"),this.handOne.score(this.handOne)}else{console.log("Lizard wins"),this.handTwo.score(this.handTwo)}}
            
            console.log("player 1 score: "+this.handOne.Score);
            console.log("Player 2 score:"+this.handTwo.Score)

    }
    declareVictorMultiplayer(){
        if(this.handOne.Score==1){
            console.log("Player 1 has won!")
        }
        else{console.log("Player 2 has won!")}
    }

    declareVictorSingle(){
        if(this.handOne.Score==1){
            console.log("Player 1 has won!")
        }
        else{console.log("Computer has won!")}
    }
    playAgain(){
        let again =console.log("Woud you like to play again? Press 1 for 'yes' 2 for 'no'.")
        again=prompt();
        if(again==1){this.gameSelection();}
        else{console.log("See you next time!");}
    }

    runGame(){
        this.displayWelcome();
        this.gameSelection();
        this.playAgain();
    }
}

module.exports={
    Main: mainMenu,
};