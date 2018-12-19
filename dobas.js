const regexDobas = /(\d+)d(\d{2|3|4|6|8|10|20|100})(?:x(\d)+)?([\+|\-]\d+)?/g

var Dobas = function (db, oldalak, szorzo, bonusz) {
    this.db = db;
    this.oldalak = oldalak;
    this.szorzo = szorzo;
    this.bonusz = parseInt(bonusz);

}


var eleteroDobas = function(eleteroDobas){
    this.dobas = new Dobas()
    this.eletPont = 0
}
function dobj(dobas) {
    var eredmeny = 0;
    i = 0;
    while (i < dobas.db) {
        dobott_ertek = Math.floor(Math.random() * dobas.oldalak) + 1;
        eredmeny += dobott_ertek;
        i++;
    }
    eredmeny += dobas.bonusz
    return eredmeny;
}

var dobj_ujra = dobas => {
    var eredmeny = 0;
    i = 0;
    while (i < dobas.db) {
        dobott_ertek = Math.floor(Math.random() * dobas.oldalak) + 1;
        eredmeny += dobott_ertek;
        i++;
    }
    eredmeny += dobas.bonusz
    return eredmeny;
}


var Tulajdonsag = function (rovidNev, ertek) {
    
    this.rovidNev = rovidNev
    this.ertek = ertek
    // this.tulModosito = Math.floor((this.ertek - 10 ) / 2)
    this.tulModosito = function() {return Math.floor((this.ertek - 10) / 2)}
   
}

var found = regexDobas.exec("8d6+45");
dobas = new Dobas(found[1], found[2], found[3], found[4]);
console.log(dobj_ujra(dobas));
var tulajdonsag = new Tulajdonsag("Áll", 19)
console.log(tulajdonsag.tulModosito())
tulajdonsag.ertek = 28
console.log(tulajdonsag.ertek)
console.log(tulajdonsag.tulModosito())