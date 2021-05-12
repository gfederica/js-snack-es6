// // Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var squadre = [
    {
        nome: "Squadra Blu",
        punti: 0,
        falli: 0
    },
    {
        nome: "Squadra Verde",
        punti: 0,
        falli: 0
    },
    {
        nome: "Squadra Rossa",
        punti: 0,
        falli: 0
    },
    {
        nome: "Squadra Gialla",
        punti: 0,
        falli: 0
    }
]

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }


for (i=0; i<squadre.length; i++) {
    var squadra = squadre[i];
    squadra.punti = getRandomNumber(100);
    squadra.falli = getRandomNumber(10);
  }

console.log(squadre);

var squadreSenzaPunteggio = [];

for (i=0; i<squadre.length; i++) {
    var squadra = squadre[i];
    squadreSenzaPunteggio.push(squadra.nome + ", numero falli: " + squadra.falli);
}

console.log(squadreSenzaPunteggio);