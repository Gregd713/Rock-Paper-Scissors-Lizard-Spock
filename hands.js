class Hand{
    constructor(name, score){
        this.name =name;
        this.score =0;
    }
    attack(opposingFighter){
        opposingFighter.score = opposingFighter.score - this.score;
        console.log(`The attack did ${this.attackPower} damage!! WOW!`)
}
}