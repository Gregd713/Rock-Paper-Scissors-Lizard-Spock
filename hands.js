class Hand{
    constructor(name){
        this.name =name;
        this.Score =0;
        this.scored=1;
    }
    score(addPoint){
        addPoint.Score = this.Score + this.scored;
        console.log(`Player who chose ${this.name} has won this round. Rounds won: ${this.Score} `)
}
}

module.exports={
    Hand: Hand
}