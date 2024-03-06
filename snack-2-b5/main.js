console.log('connesso');

/*

Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/

const zuchinisList = [
    {
        name: 'zucchina 1',
        weight: 1,
        length: 16
    },
    {
        name: 'zucchina 2',
        weight: 2,
        length: 9
    },
    {
        name: 'zucchina 3',
        weight: 3,
        length: 28
    },
    {
        name: 'zucchina 4',
        weight: 4,
        length: 7
    },
    {
        name: 'zucchina 5',
        weight: 5,
        length: 36
    },
    {
        name: 'zucchina 6',
        weight: 6,
        length: 5
    },
    {
        name: 'zucchina 7',
        weight: 7,
        length: 14
    },
    {
        name: 'zucchina 8',
        weight: 8,
        length: 23
    },
    {
        name: 'zucchina 9',
        weight: 9,
        length: 12
    },
    {
        name: 'zucchina 10',
        weight: 10,
        length: 10
    },
];

console.log(zuchinisList);

let bigZuchinisSum = 0;

let smallZuchinisSum = 0;

const bigZuchinisList = zuchinisList.filter(zuchini => zuchini.length >= 15);

console.log(bigZuchinisList);

const smallZuchinisList = zuchinisList.filter(zuchini => zuchini.length < 15);

console.log(smallZuchinisList);

bigZuchinisList.forEach(zuchini => bigZuchinisSum += zuchini.length);

console.log(bigZuchinisSum);

smallZuchinisList.forEach(zuchini => smallZuchinisSum += zuchini.length);

console.log(smallZuchinisSum);



