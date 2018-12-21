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

var szornyekJSON = 
[
    {
      "nev": "Aboleth",
      "meret": "Óriási",
      "tipus": "Rendellenesség",
      "tipus_modosito": "Vízi",
      "tulajdonsagok": 
      [
        {
          "nev" : "Erő",
          "pont" : 26
        },
        {
          "nev" : "Ügy",
          "pont" : 12
        },
        {
          "nev" : "Áll",
          "pont" : 20
        },
        {
          "nev" : "Int",
          "pont" : 15
        },
        {
          "nev" : "Böl",
          "pont" : 17
        },
        {
          "nev" : "Kar",
          "pont" : 17
        }
      ],
      "jartassagok": 
      [
          {
              "nev" : "Koncentráció",
              "pont" : 16
          }
      ],
      "eletero_dobas": 
      {
          "dobas" : "8d8+40",
          "eletpont ": 76
      },
      "kezdemenyezes": 
      {
          "modosito" : 1,
          "eredet": "Ügy"
      },
      "vf": 
      {
          "ertek": 16,
          "modositok" : 
          [
            [-2, "termet"], [1, "Ügy"],  [7, "természetes"]
          ]
      },
      "mentok": [
        {
          "nev": "Szív",
          "ertek" : 7
        },
        {
          "nev": "Gyors",
          "ertek" : 3
        },
        {
          "nev": "Akarat",
          "ertek" : 11
        }
      ],
      "kihivasi_ertek": 7,
      "tamadasok": 
      {
        'szam': 4,
        'nev': "Csáp",
        "bonusz" : 12,
        "forma" : "kh."
        
      },
      "sebzes": 
      {
          "nev" : "Csáp",
          "dobas" : "1d6+9",
          "hatas" : "Átalakítás"
      },
      "oldal_eleres": 
      {
          "szelesseg" : 10,
          "hosszusag" : 20,
          "tavolsag" : 10
      },
      "kulonleges_tamadasok": ["Átalakítás", "pszionika", "rabszolgaság"],
      "kulonleges_kepessegek": 
      [
          "Nyálkafelhő"   
      ],
      "sebesseg": "10 láb, úszva 60 láb",
      "kepessegek": 
      [
        "Éberség", "Harci Alkalmazások", "Vasakarat"        
      ],
      "fejlesztes": 
      [
          {
              "min": 9,
              "max": 16,
              "meret": "Óriási"
          },
          {
            "min": 17,
            "max": 24,
            "meret": "Hatalmas"
          } 
      ]
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
  for (let i = 0; i < szorny.fejlesztes.length; i++) {
    const f = array[i];
    if((szorny.szint > valtozat.min) && (szorny.szint < valtozat.max)){
      if(valtozat.meret != szorny.meret){
        szorny.meret = valtozat.meret;
        break;
      }    
    } 
  }
}

function modositsUjMeretSzerint(szorny){
  let ujMeret = szorny.meret;
  meretJSON.forEach(meret => {
    if(meret.uj_meret == ujMeret){

    }
  });

}

var found = regexDobas.exec("8d6+45");
regexDobas.lastIndex = 0;
var dobas = new Dobas(found[1], found[2], found[3], found[4]);
var tulajdonsag = new Tulajdonsag("Áll", 19);
tulajdonsag.ertek = 28;

var tesztSzorny = szornyekJSON[0];
tesztSzorny.szint = regexDobas.exec(tesztSzorny.eletero_dobas.dobas)[1];
regexDobas.lastIndex = 0;
//tesztSzorny.eletero_dobas.dobas
fejlessz(tesztSzorny, 21)
