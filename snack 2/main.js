console.log('connesso');

/*

snack 2
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

*/

const stringList = ['ceLLulAre', 'BOrraCciA', 'coMputEr', 'PapeReLla'];

console.log(stringList);

// creo una nuova lista utilizzando il ciclo con il metodo .map()

const newStringList = stringList.map(word => {

    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();

});

console.log(newStringList);