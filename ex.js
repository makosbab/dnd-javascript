// () =>{}

const TAX_RATE = 0.27;
const PHONE_PRICE = 90000;
const ACCESSORY_PRICE = 2000;
const SPEND_THRESH = 650000;
var BALANCE = 800000;
var purchaseAmount = 0;
var getTax = (amount) => { return amount * TAX_RATE; };


while (purchaseAmount < BALANCE) {
    purchaseAmount += PHONE_PRICE;
    console.log(purchaseAmount);
    if (purchaseAmount < SPEND_THRESH) {
        purchaseAmount += ACCESSORY_PRICE;
    }
    purchaseAmount += getTax(purchaseAmount);

}
console.log(purchaseAmount)

console.log(BALANCE)


function test2(num) {
    for (var index = 0; index < num; index++) {
        console.log(num);

    }
    console.log(index);
}

test2(11);


(function foo() { console.log("Foo!") })();

(foo2 = () => { console.log("Foobar!") })();

var makeAdder = (x) => {
    var add = (y) => x + y;

    return add;
}

var plusOne = makeAdder(1);

console.log(plusOne(19));

function User() {
    var uname, passw;

    function doLogin(user, pw) {
        uname = user;
        passw = pw;
    }

    var publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

var rob = User();
rob.login("Robi", "pass");

var aboleth = {
	"name" : "Aboleth",
	"size" : "Óriási",
	"type" : "Rendellenesség",
	"subtype" : "Vízi",
	"str" : 26,
	"dex" : 12,
	"con" : 20,
	"int" : 15,
	"wis" : 17,
	"char" : 17,
	"skills" : [
		{
			"name" : "Koncentráció",
			"score" : 16
		}
	],
	"hitDice" : {
		"count" : "8",
		"hdType" : "d8",
		"bonus" : 40,
		"avgHitPoints" : 76
	},
	"initiative" : 1,
	"armorClass" : 16,
	"fortitude" : 7,
	"reflex" : 3,
	"will" : 11,
	"challengeRating" : 7,
	"attacks" : [
		{
			"count" : 4,
			"name" : "Csáp",
			"bonus" : 12,
			"form" : "közelharci"
		}
	],
	"damage" : "Csáp 1d6+9 és átalakítás",
	"spaceReach" : {
		"width" : 10,
		"length" : 20,
		"naturalReach" : 10
	},
	"specialAttacks" : [
		"Átalakítás",
		"Pszionika",
		"Rabszolgaság"
	],
	"specialQualities" : [
		"Nyálkafelhő"
	],
	"speed" : "10 láb, úszva 60 láb",
	"feats" : [
		"Éberség",
		"Harci Alkalmazások",
		"Vasakarat"
	],
	"advancement" : [
		{
			"rangeMin" : 9,
			"rangeMax" : 16,
			"version" : "Óriási"
		},
		{
			"rangeMin" : 17,
			"rangeMax" : 24,
			"version" : "Hatalmas"
		}
	]
};


(function setDynamicAttributes() {

	var attrMod = (attr) => Math.floor((attr - 10) / 2);
	aboleth.hitPoints = aboleth.hitDice.avgHitPoints;
	aboleth.strMod = () => attrMod(aboleth.str);
	aboleth.dexMod = () => attrMod(aboleth.dex);
	aboleth.conMod = () => attrMod(aboleth.con);
	aboleth.intMod = () => attrMod(aboleth.int);
	aboleth.wisMod = () => attrMod(aboleth.wis);
	aboleth.charMod = () => attrMod(aboleth.char);
})();

var Creature = (function () {
	//var creature = null;
	
	var changeHitDice = (creature) => {

	}

    var advanceToLevel = (creature) => {

		changeStatsByNewSize(creature);
		
    }

    var grantFeats = () => { 
        console.log("Granted!");
    }

    var countSkillPoints = () => {

    }
    
    var changeStatsByNewSize = (creature) => {
		Object.assign(creature, {
			str: 40,
			dex: 28,
			con: 31
		});
		//console.log(creature);
	}

    return {
        advanceToLevel: advanceToLevel
    }
})();

Creature.advanceToLevel(aboleth);
console.log(aboleth)
aboleth.str = 66;
console.log(aboleth.strMod());
aboleth.str = 87;
console.log(aboleth.strMod());