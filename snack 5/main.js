console.log('connesso');

/*

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

*/

const bicyclesList = [
    {
        nome: 'Bici 1',
        peso: 18
    },
    {
        nome: 'Bici 2',
        peso: 47
    },
    {
        nome: 'Bici 3',
        peso: 29
    },
    {
        nome: 'Bici 4',
        peso: 9
    },
    {
        nome: 'Bici 5',
        peso: 10
    },
];

console.log(bicyclesList);

// creo una variabile con un valore numerico per essere confrontato

let maxToMinWeight = 50;

// creo una variabile per recuperare il nome della bici

let bicycleName = '';

// creo un ciclo foreach per trovare il peso minore

bicyclesList.forEach(bike => {
    // utilizzo destructuring per creare due variabili
    const { nome, peso } = bike;

    // creo delle condizioni per trovare il peso minore
    if (peso < maxToMinWeight) {
        maxToMinWeight = peso;
        bicycleName = nome;
    }

})

// stampo in console utilizzando il template literal
console.log(`La ${bicycleName} con il peso di ${maxToMinWeight} è la più leggera`);