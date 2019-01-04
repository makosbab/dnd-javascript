var Roll = function (numDice, sides, multip, bonus) {
    this.numDice = numDice;
    this.sides = sides;
    this.multip = multip;
    this.bonus = parseInt(bonus);

}

function rollTheDice(roll) {
    var result = 0;
    let i = 0;
    console.log(roll)
    while (i < roll.numDice) {
        let rollValue = Math.floor(Math.random() * roll.sides) + 1;
        result += rollValue;
        i++;
    }
    result += roll.bonus;
    console.log(result);
    return result;
}