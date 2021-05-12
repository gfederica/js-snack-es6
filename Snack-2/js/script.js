// // Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

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

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var squadreSenzaPunteggio = [];


for (let i=0; i<squadre.length; i++) {
    var squadra = squadre[i];
    // ad ogni ciclo prendo dal singolo oggetto la proprietà che mi interessa e la salvo subito in una nuova variabile
    var {nome, falli} = squadra;
    // pusho nel nuovo array
    squadreSenzaPunteggio.push(nome + ", numero falli: " + falli);
}

console.log(squadreSenzaPunteggio);

// estraggo dal nuovo array i dati delle singole squadre per stamparli a schermo
var [nome1, nome2, nome3, nome4] = squadreSenzaPunteggio;

var messaggio = document.getElementById("lista");

// stampo a schermo con template literal
messaggio.innerHTML = `Lista squadre e falli effettuati:
<ul>
    <li> ${nome1}
    </li>
    <li> ${nome2}
    </li>
    <li> ${nome3}
    </li>
    <li> ${nome4}
    </li>
</ul>`;

