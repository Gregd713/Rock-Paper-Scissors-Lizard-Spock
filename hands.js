class Hand{
    constructor(name){
        this.name =name;
        this.score =0;
        this.attackPower=1;
    }
    attack(opposingFighter){
        opposingFighter.score = opposingFighter.score + this.attackPower;
        console.log(`The attack did ${this.attackPower} damage!! WOW!`)
}
}

module.exports={
    Hand: Hand
}