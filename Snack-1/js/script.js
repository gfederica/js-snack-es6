// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


var biciclette = [
    {
        nome: "bicicletta_1",
        peso: 24,
    },
    {
        nome: "bicicletta_2",
        peso: 10,
    },
    {
        nome: "bicicletta_3",
        peso: 14,
    },
    {
        nome: "bicicletta_4",
        peso: 8,
    },
    {
        nome: "bicicletta_5",
        peso: 30,
    }
]
// vecchio codice
// var biciLeggera = biciclette[0];

// usiamo il destructuring per gli array, assegno alla prima bici il valore di bici leggera, che andrò a sostituire eventualmente nel ciclo for:
var [biciLeggera] = biciclette;
console.log(biciLeggera);

for (let i = 0; i<biciclette.length; i++) {
    var bicicletta = biciclette[i];

    if (bicicletta.peso < biciLeggera.peso) {
        biciLeggera = bicicletta;
    } 
}

// stampo il risultato in console e uso il destructuring di nuovo, stavolta sull'oggetto bici leggera, per raccogliere singolarmente nome e peso e salvarli in due nuove variabili
console.log(biciLeggera);
const {nome, peso} = biciLeggera;


var messaggio = document.getElementById("bici_leggera");

// stampo il messaggio, userò le variabili che ho estratto dall'oggetto bici leggera
messaggio.innerHTML = `La bici più leggera è questa:
${nome}, con peso ${peso} kg.`;
