"Use Strict";
const prompt =require("prompt-sync")();
const {Human}=require("./rock");
const{Hand}=require("./hands")

// function singlePlayer(){
//     var handType= parseInt(console.log("What hand are you playing"+"\n1. Rock"+"\n2. Paper"+"\n3. Scissors"+"\n4. Lizard"+"\n5. Spock"+"\nPlease enter the numerical value for entry"));
//     handType=prompt();
//     if(handType==1){return "rock"}
//     else if(handType==2){return "paper"}
//     else if(handType==3){return "scissors"}
//     else if(handType==4){return "lizard"}
//     else if(handType==5){return "spock"}}
//     var computerChoice=Math.floor(Math.random()*5)+1;
//     if(computerChoice==1){
//         computerChoice="rock";}
//     else if(computerChoice==2){
//         computerChoice="paper";}
//     else if(computerChoice==3){
//         computerChoice="scissors"}
//     else if(computerChoice==4){
//         computerChoice="Lizard"}
//     else if(computerChoice==5){
//         computerChoice="Spock"}
//     var compare =function(choice1,choice2){
//         if(choice1==choice2){
//             return "It's a tie"
//         }
//         if(choice1=="rock"){
//             if(choice2=="scissors"){return"Rock wins!"}
//             else{return "Paper wins!"}
//         }
    
//         if(choice1 == "paper") {
//         if(choice2 == "rock") {
//             return "paper wins";
//         } 
//         else {
//             if(choice2 == "scissors") {
//                 return "scissors wins";
//         }
//         }}
//         if(choice1 == "scissors") {
//         if(choice2 == "rock") {
//             return "rock wins";
//         } else {
//             if(choice2 == "paper") {
//                 return "scissors wins";
//             }
//         }}
//         if(choice1=="lizard"){
//             if(choice2=="rock"){return "rock wins"}
//             else{if(choice2=="paper"){return"Lizard wins";}
//         }}
//         if(choice1=="Spock"){
//             if(choice2=="rock"){return "Spock wins"}
//         else if(choice2=="scissors"){return "Spock wins"}
//         else if(choice2=="lizard"){return "Lizard wins"}
//         else{if(choice2=="paper"){return "paper wins"}}
//     }return choice1+choice2;
//     }
// console.log("User Choice: " + handType);
// console.log("Computer Choice: " + computerChoice);
// console.log(compare(handType, computerChoice));
// }


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
        // this.fighterTwo = new Robot();
    }
    gameSelection(){
        var gameType= parseInt(console.log("Would you like to play Single Player or Multiplayer?"+"\n1. Single Player"+"\n2. Multiplayer"+"\nPlease enter numerical value for your choice."));
        gameType=prompt();
        if(gameType==1){
            console.log("You have chosen single player");
            this.handOne=new Human();
            this.computer;

        }
        else if(gameType==2){
            console.log("You have chosen multiplayer.")
        }
        else{console.log("Invalid entry");
        this.gameSelection();}
    }
    gameLogic(){
        while(this.handOne.score>2&&this.handTwo.score>2){
            console.log(``)
        }
    }
    
    // runBattle(){
    //     console.log(`Let the battle between ${this.fighterOne.name} and ${this.fighterTwo.name} begin!!`);

    //     while(this.fighterOne.health > 0 && this.fighterTwo.health > 0){
    //         console.log(`Press 1 to attack with ${this.fighterOne.name} \nPress 2 to attack with ${this.fighterTwo.name}`);
    //         let userChoice = prompt();
    //         if(userChoice == "1"){
    //             this.fighterOne.attack(this.fighterTwo);
    //         }
    //         else if(userChoice == "2"){
    //             this.fighterTwo.attack(this.fighterOne);
    //         }
    //         else{
    //             console.log("Hey that's not right!  Try again!");
    //         }
    //     }
    // }

    // declareWinner(){
    //     if(this.fighterOne.health > this.fighterTwo.health){
    //         console.log(`THIS GAME'S WINNER IS....${this.fighterOne.name}!!!`);
    //     }
    //     else {
    //         console.log(`ALL HAIL OUR ROBOT OVERLORD ${this.fighterTwo.name}`);
    //     }
    // }

    runGame(){
        this.displayWelcome();
        this.gameSelection();
        // this.runBattle();
        // this.declareWinner();
    }
}

module.exports={
    // Singleplayer: singlePlayer,
    Main: mainMenu,
};