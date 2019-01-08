"use strict";
const regexDobas = /(\d+)d(\d{2|3|4|6|8|10|20|100})(?:x(\d)+)?([\+|\-]\d+)?/gi

var statChangesbySize = 
[
  {
    "oldSize": "Apró",
    "newSize": "Pöttöm",
    "str": null,
    "dex": -2,
    "con": null,
    "naturalArmor": null,
    "acAndAttack": -4
  },
  {
    "oldSize": "Pöttöm",
    "newSize": "Pici",
    "str": 2,
    "dex": -2,
    "con": null,
    "naturalArmor": null,
    "acAndAttack": -2
  },
  {
    "oldSize": "Pici",
    "newSize": "Kicsi",
    "str": 4,
    "dex": -2,
    "con": null,
    "naturalArmor": null,
    "acAndAttack": -1
  },
  {
    "oldSize": "Kicsi",
    "newSize": "Közepes",
    "str": 4,
    "dex": -2,
    "con": 2,
    "naturalArmor": null,
    "acAndAttack": -1
  },
  {
    "oldSize": "Közepes",
    "newSize": "Nagy",
    "str": 8,
    "dex": -2,
    "con": 4,
    "naturalArmor": 2,
    "acAndAttack": -1
  },
  {
    "oldSize": "Nagy",
    "newSize": "Óriási",
    "str": 8,
    "dex": -2,
    "con": 4,
    "naturalArmor": 3,
    "acAndAttack": -1
  },
  {
    "oldSize": "Óriási",
    "newSize": "Hatalmas",
    "str": 8,
    "dex": null,
    "con": 4,
    "naturalArmor": 4,
    "acAndAttack": -2
  },
  {
    "oldSize": "Hatalmas",
    "newSize": "Gigászi",
    "str": 8,
    "dex": null,
    "con": 4,
    "naturalArmor": 5,
    "acAndAttack": -4
  }
]

var creatureImprovement = 
[
  {
    "type": "Alakváltó",
    "hitDice": "1d8",
    "attackBonus": 0.75,
    "goodSaves": "Szívósság, Gyorsaság, Akarat",
    "skillPoints": 1

  },
  {
    "type": "Állat",
    "hitDice": "1d8",
    "attackBonus": 0.75,
    "goodSaves": "Akarat",
    "skillPoints": "2"
  },
  {
    "type": "Bestia",
    "hitDice": "1d10",
    "attackBonus": 0.75,
    "goodSaves": "Szívósság, Gyorsaság",
    "skillPoints": 1
  },
  {
    "type": "Elementál",
    "hitDice": "1d8",
    "attackBonus": 0.75,
    "goodSaves": "Föld : 'Szívósság,Víz : Szívósság, Levegő : Gyorsaság, Tűz : Gyorsaság",
    "skillPoints": 2
  },
  {
    "type": "Élőhalott",
    "hitDice": "1d12",
    "attackBonus": 0.5,
    "goodSaves": "Szívósság",
    "skillPoints": 4
  },
  {
    "type": "Fey",
    "hitDice": "1d6",
    "attackBonus": 0.5,
    "goodSaves": "Gyorsaság,Akarat",
    "skillPoints": 2
  },
  {
    "type": "Féreg",
    "hitDice": "1d8",
    "attackBonus": 0.5,
    "goodSaves": "Szívósság",
    "skillPoints": "10-13"
  },
  {
    "type": "Humanoid",
    "hitDice": "1d8",
    "attackBonus": 0.75,
    "goodSaves": "Random",
    "skillPoints": 2
  },
  {
    "type": "Humanoid szörny",
    "hitDice": "1d8",
    "attackBonus": 1,
    "goodSaves": "Gyorsaság,Akarat",
    "skillPoints": 2
  },
  {
    "type": "Külvilági",
    "hitDice": "1d8",
    "attackBonus": 1,
    "goodSaves": "Szívósság,Gyorsaság,Akarat",
    "skillPoints": 8
  },
  {
    "type": "Mágikus Bestia",
    "hitDice": "1d10",
    "attackBonus": 1,
    "goodSaves": "Szívósság,Gyorsaság,Akarat",
    "skillPoints": 8
  },
  {
    "type": "Növény",
    "hitDice": "1d8",
    "attackBonus": 1,
    "goodSaves": "Szívósság",
    "skillPoints": 2
  },
  {
    "type": "Ooze",
    "hitDice": "1d10",
    "attackBonus": 0.75,
    "goodSaves": "''",
    "skillPoints": 0,
  },
  {
    "type": "Óriás",
    "hitDice": "1d8",
    "attackBonus": 0.75,
    "goodSaves": "Szívósság",
    "skillPoints": 1,
  },
  {
    "type": "Rendellenesség",
    "hitDice": "1d8",
    "attackBonus": 0.75,
    "goodSaves": "Szívósság, Gyorsaság, Akarat",
    "skillPoints": 2,
  },
  {
    "type": "Sárkány",
    "hitDice": "1d12",
    "attackBonus": 1,
    "goodSaves": "Szívósság',Gyorsaság,Akarat",
    "skillPoints": 6,
  },
  {
    "type": "Szerkezet",
    "hitDice": "1d10",
    "attackBonus": 0.75,
    "goodSaves": "",
    "skillPoints": 2,
  }
]

var sizeModifiers = 
[
  {
    "size": "Apró",
    "sizeModifier": 8
  },
  {
    "size": "Pöttöm",
    "sizeModifier": 4
  },
  {
    "size": "Pici",
    "sizeModifier": 2
  },
  {
    "size": "Kicsi",
    "sizeModifier": 1
  },
  {
    "size": "Közepes",
    "sizeModifier": 0
  },
  {
    "size": "Nagy",
    "sizeModifier": -1
  },
  {
    "size": "Óriási",
    "sizeModifier": -2
  },
  {
    "size": "Hatalmas",
    "sizeModifier": -4
  },
  {
    "size": "Gigászi",
    "sizeModifier": -8
  }
]

function Advancer(monster){
  this.monster = monster;
  this.extraSkillPoints = 0;
  this.extraFeats = 0;
  console.log(this);

  this.advanceMonster = function(newLevel){
    console.log(`Régi szint: ${this.monster.hitDice.numOfHitDice}, új szint: ${newLevel}`)
    let levelDiff = newLevel - this.monster.hitDice.numOfHitDice;
    this.countSkillPoints(levelDiff);
    this.grantFeats(levelDiff);
    this.updateHitDice(newLevel, levelDiff);
    this.checkSizeAndUpdate(newLevel);   
  }

  this.grantFeats = function(levelDiff){
    this.extraFeats = Math.floor(levelDiff / 3);
  }
  
  this.countSkillPoints = function(levelDiff){
    if(this.monster.abilities[3].score == 0 || !this.monster.abilities[3].score){
      return; 
    }
    let monsterType = this.monster.type
    let lookup = creatureImprovement.find(function(impr){
      return impr.type == monsterType;
    });
    if(lookup.skillPoints + this.monster.abilities[3].modifier <= 0){
      this.extraSkillPoints += levelDiff;
    }
    else {
      this.extraSkillPoints += (this.monster.abilities[3].modifier + lookup.skillPoints) * levelDiff;
    }
    console.log("Fejlesztés után járó jártasságpontok: " + this.extraSkillPoints);

  }
  
  this.updateHitDice = function(newLevel, levelDiff){
    this.monster.hitPoints += rollTheDice(new Roll(levelDiff, 8, 1, (levelDiff) * this.monster.abilities[2].modifier));
    this.monster.hitDice.numOfHitDice = newLevel;
    this.monster.hitDice.bonus += (levelDiff) * this.monster.abilities[2].modifier;
    console.log("Fejlesztés utáni életerő: " + this.monster.hitPoints);
  }
  
  this.checkSizeAndUpdate = function(newLevel){
    let lookup = this.monster.advancement.find(function(version){
      return (newLevel > version.hitDiceMin) && (newLevel < version.hitDiceMax)
    });

    if (lookup.version !== this.monster.size){
      console.log(this.monster.size)
      this.monster.size = lookup.version;

      this.changeStatsBySize();
    }
  }
  this.changeStatsBySize = function(){
    let monsterSize = this.monster.size;
    let lookup = statChangesbySize.find(function(change){
      return (change.newSize === monsterSize);
    });
    this.monster.abilities[0].score += lookup.str;
    this.monster.abilities[1].score += lookup.dex;
    this.monster.abilities[2].score += lookup.con;
    this.monster.armorClass.class += lookup.acAndAttack;
    console.table(lookup)
  }
}


