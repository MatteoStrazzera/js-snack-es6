console.log('connesso');

/*

SNACK 4
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

*/

const peopleList = [
    {
        nome: 'Marco',
        cognome: 'Rossi',
        eta: 28
    },
    {
        nome: 'Francesca',
        cognome: 'Bianchi',
        eta: 15
    },
    {
        nome: 'Luigi',
        cognome: 'Verdi',
        eta: 22
    },
    {
        nome: 'Anna',
        cognome: 'Rizzo',
        eta: 40
    },
    {
        nome: 'Giuseppe',
        cognome: 'Ferrari',
        eta: 19
    },
    {
        nome: 'Elena',
        cognome: 'Conti',
        eta: 17
    },
    {
        nome: 'Alessio',
        cognome: 'Marini',
        eta: 26
    },
    {
        nome: 'Maria',
        cognome: 'Galli',
        eta: 55
    },
    {
        nome: 'Paolo',
        cognome: 'Moretti',
        eta: 33
    },
    {
        nome: 'Giulia',
        cognome: 'Colombo',
        eta: 16
    }
];

console.log(peopleList);

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

// creo il nuovo array utilizzando il metodo .map() e le condizioni if / else

const driverList = peopleList.map((person) => {
    if (person.eta >= 18) {
        
        const phrase = `${person.nome} ${person.cognome} ha ${person.eta} anni quindi può guidare`

        return phrase;
    } else {
        const phrase = `${person.nome} ${person.cognome} ha ${person.eta} anni quindi non può guidare`

        return phrase;
    }
});

console.log(driverList);