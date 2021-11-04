"Use Strict";
const prompt =require("prompt-sync")();
const {Human}=require("./rock");
const{Hand}=require("./hands")
const{Computer}=require("./computer")

    // var compare =function(choice1,choice2){
    //     if(choice1==choice2){
    //         return "It's a tie"
    //     }}
        // if(choice1=="rock"){
        //     if(choice2=="scissors"){return"Rock wins!"}
        //     else{return "Paper wins!"}
        // }
    
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
        switch(gameType){
        case "1":
        {
            console.log("You have chosen single player");
            this.handOne =new Human();
            this.computer=new Computer();
            break;
        }
        case "2":{
            console.log("You have chosen multiplayer.");
            break;
        }
        default:
            console.log("Invalid entry");
            this.gameSelection();
    }}
    gameLogic(){
        if(this.handOne.name==1){this.handOne.name="rock"}
        else if(this.handOne.name==2){this.handOne.name="paper"}
        else if(this.handOne.name==3){this.handOne.name="scissors"}
        else if(this.handOne.name==4){this.handOne.name="lizard"}
        else{this.handOne.name="spock"}
        console.log(`Player has chosen ${this.handOne.name} and computer has chosen ${this.computer.name}`);
        while(this.handOne.Score<2&&this.computer.Score<2){
            if(this.handOne.name==this.computer.name){console.log("it's a tie")}
            else if(this.handOne.name=="rock"){if(this.computer.name=="paper"){console.log("Paper wins!"),this.computer.score(this.computer)}
            else if(this.computer.name=="scissors"){console.log("Rock wins"),this.handOne.score(this.handOne)}
            else if(this.computer.name=="lizard"){console.log("Rock wins"),this.handOne.score(this.handOne)}else{console.log("Spock Wins"),this.computer.score(this.computer)}}
            console.log("player score: "+this.handOne.Score);
            console.log("Computer score:"+this.computer.Score)
    }}
    declareVictor(){
        if(this.handOne.Score==2){
            console.log("Player 1 has won!")
        }
        else{console.log("Computer has won!")}
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
        this.gameLogic();
        // this.runBattle();
        this.declareVictor();
    }
}

module.exports={
    // Singleplayer: singlePlayer,
    Main: mainMenu,
};