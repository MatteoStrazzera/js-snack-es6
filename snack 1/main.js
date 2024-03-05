console.log('connesso');

/*

snack 1

Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.

*/

const carsArray = [
    {
        marca: 'Ferrari ',
        modello: 'LaFerrari',
        alimentazione:'benzina'
    },
    {
        marca: 'Porsche ',
        modello: '911 GT3 RS',
        alimentazione:'benzina'
    },
    {
        marca: 'Lamborghini ',
        modello: 'Aventador LP750-4 SV',
        alimentazione:'diesel'
    },
    {
        marca: 'McLaren ',
        modello: 'P1',
        alimentazione:'elettrico'
    },
    {
        marca: 'Bugatti ',
        modello: 'Chiron',
        alimentazione:'gpl'
    },
    {
        marca: 'Koenigsegg ',
        modello: 'Regera',
        alimentazione:'metano'
    },
    {
        marca: 'Pagani ',
        modello: 'Huayra BC',
        alimentazione:'diesel'
    },
    {
        marca: 'Aston Martin ',
        modello: 'Vulcan',
        alimentazione:'elettrico'
    },
    {
        marca: 'Ford ',
        modello: 'GT',
        alimentazione:'gpl'
    },
    {
        marca: 'Hennessey ',
        modello: 'Venom F5',
        alimentazione:'benzina'
    },

];

console.log(carsArray);

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

const benzinaArray = carsArray.filter(car => car.alimentazione === 'benzina' );

console.log(benzinaArray);

const dieselArray = carsArray.filter(car => car.alimentazione === 'diesel' );

console.log(dieselArray);

const otherCarsArray = carsArray.filter(car => car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel');

console.log(otherCarsArray);