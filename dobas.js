"use strict";
const regexDobas = /(\d+)d(\d{2|3|4|6|8|10|20|100})(?:x(\d)+)?([\+|\-]\d+)?/gi

var meretJSON = 
[
  {
    "regi_meret": "Apró",
    "uj_meret": "Pöttöm",
    "ero": 0,
    "ugy": -2,
    "all": 0,
    "term_vertezet": 0,
    "vf_tamadas": -4
  },
  {
    "regi_meret": "Pöttöm",
    "uj_meret": "Pici",
    "ero": 2,
    "ugy": -2,
    "all": 0,
    "term_vertezet": 0,
    "vf_tamadas": -2
  },
  {
    "regi_meret": "Pici",
    "uj_meret": "Kicsi",
    "ero": 4,
    "ugy": -2,
    "all": 0,
    "term_vertezet": 0,
    "vf_tamadas": -1
  },
  {
    "regi_meret": "Kicsi",
    "uj_meret": "Közepes",
    "ero": 4,
    "ugy": -2,
    "all": 2,
    "term_vertezet": 0,
    "vf_tamadas": -1
  },
  {
    "regi_meret": "Közepes",
    "uj_meret": "Nagy",
    "ero": 8,
    "ugy": -2,
    "all": 4,
    "term_vertezet": 2,
    "vf_tamadas": -1
  },
  {
    "regi_meret": "Nagy",
    "uj_meret": "Óriási",
    "ero": 8,
    "ugy": -2,
    "all": 4,
    "term_vertezet": 3,
    "vf_tamadas": -1
  },
  {
    "regi_meret": "Óriási",
    "uj_meret": "Hatalmas",
    "ero": 8,
    "ugy": 0,
    "all": 4,
    "term_vertezet": 4,
    "vf_tamadas": -2
  },
  {
    "regi_meret": "Hatalmas",
    "uj_meret": "Gigászi",
    "ero": 8,
    "ugy": 0,
    "all": 4,
    "term_vertezet": 5,
    "vf_tamadas": -4
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

function advanceMonster(monster, newLevel){
  let levelDiff = newLevel - monster.hitDice.numOfHitDice;
  addSkillPoints(monster, levelDiff);

  if(levelDiff % 3 == 0){
    addFeats(monster, levelDiff);
  }
  updateHitDice(monster, newLevel, levelDiff);
  checkSizeAndUpdate(monster, newLevel);

/*   if(meretValtozott(monster)) {
    noveldMeretet(monster);
  } */
  
}

function addFeats(monster, levelDiff){
  for(let i=0; i < levelDiff / 3; i++);
    monster.extraFeats++;
}

function addSkillPoints(monster, levelDiff){
  let lookup = creatureImprovement.find(function(impr){
    return impr.type == monster.type;
  });
  for (let i = 0; i < levelDiff; i++) {
    monster.skillPoints += monster.abilities[3].modifier + lookup.skillPoints;
  }
}

function updateHitDice(monster, newLevel, levelDiff){
  let roll = new Roll(
    levelDiff, 
    8, 
    1, 
    (levelDiff) * monster.abilities[2].modifier
  );

  monster.hitPoints += rollTheDice(roll);

  monster.hitDice.numOfHitDice = newLevel;
  monster.hitDice.bonus += (levelDiff) * monster.abilities[2].modifier;

}

function checkSizeAndUpdate(monster, newLevel){
  let lookup = monster.advancement.find(function(version){
    return (newLevel > version.hitDiceMin) && (newLevel < version.hitDiceMax)
  });
  console.log(lookup)
  if (lookup.version != monster.size){
    monster.size = lookup.version;
  }

}

function noveldMeretet(szorny){
/*   for (let i = 0; i < szorny.fejlesztes.length; i++) {
    const f = array[i];
    if((szorny.szint > valtozat.min) && (szorny.szint < valtozat.max)){
      if(valtozat.meret != szorny.meret){
        szorny.meret = valtozat.meret;
        break;
      }    
    } 
  } */
}

function modositsUjMeretSzerint(szorny){
  let ujMeret = szorny.meret;
  meretJSON.forEach(meret => {
    if(meret.uj_meret == ujMeret){

    }
  });

}


