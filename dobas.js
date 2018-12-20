const regexDobas = /(\d+)d(\d{2|3|4|6|8|10|20|100})(?:x(\d)+)?([\+|\-]\d+)?/g
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
              "mix": 9,
              "max": 16,
              "valtozat": "Óriási"
          },
          {
            "mix": 17,
            "max": 24,
            "valtozat": "Hatalmas"
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

var dobjUjra = dobas => {
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
console.log(dobjUjra(dobas));
var tulajdonsag = new Tulajdonsag("Áll", 19)
console.log(tulajdonsag.tulModosito())
tulajdonsag.ertek = 28
console.log(tulajdonsag.ertek)
console.log(tulajdonsag.tulModosito())

tesztSzorny = szornyekJSON[0]
console.log(tesztSzorny.tulajdonsagok[1].nev)
tesztSzorny.szint = 6