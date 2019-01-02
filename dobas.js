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

var Dobas = function (db, oldalak, szorzo, bonusz) {
    this.db = db;
    this.oldalak = oldalak;
    this.szorzo = szorzo;
    this.bonusz = parseInt(bonusz);

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

var dobjUjra = dobas => {
    let eredmeny = 0;
    let i = 0;
    while (i < dobas.db) {
        let dobott_ertek = Math.floor(Math.random() * dobas.oldalak) + 1;
        eredmeny += dobott_ertek;
        i++;
    }
    eredmeny += dobas.bonusz;
    return eredmeny;
}


var Tulajdonsag = function (rovidNev, ertek) {
    
    this.rovidNev = rovidNev;
    this.ertek = ertek;
    // this.tulModosito = Math.floor((this.ertek - 10 ) / 2)
    this.tulModosito = function() {return Math.floor((this.ertek - 10) / 2)};
   
}

function fejlessz(szorny, ujSzint){
  szorny.szint = ujSzint;
  if(meretValtozott(szorny)) {
    noveldMeretet(szorny);
  }
  
}

function meretValtozott(szorny){
  let talalat = szorny.fejlesztes.find(function(valtozat){
    return (szorny.szint > valtozat.min) && (szorny.szint < valtozat.max)
  });
  console.log(talalat);
  return (talalat.meret != szorny.meret);
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


