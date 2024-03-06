console.log('connesso');

/*

Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

*/

const zuchinisList = [
    {
        name: 'zucchina 1',
        weight: 1,
        length: 10
    },
    {
        name: 'zucchina 2',
        weight: 2,
        length: 9
    },
    {
        name: 'zucchina 3',
        weight: 3,
        length: 8
    },
    {
        name: 'zucchina 4',
        weight: 4,
        length: 7
    },
    {
        name: 'zucchina 5',
        weight: 5,
        length: 6
    },
    {
        name: 'zucchina 6',
        weight: 6,
        length: 5
    },
    {
        name: 'zucchina 7',
        weight: 7,
        length: 4
    },
    {
        name: 'zucchina 8',
        weight: 8,
        length: 3
    },
    {
        name: 'zucchina 9',
        weight: 9,
        length: 2
    },
    {
        name: 'zucchina 10',
        weight: 10,
        length: 1
    },
];

console.log(zuchinisList);

let zuchinisSum = 0;

const weightSum = zuchinisList.forEach(zuchinis => {
    
    // zuchinisSum += zuchinis.weight;

    zuchinisSum = zuchinisSum + zuchinis.weight
});

console.log(zuchinisSum);

