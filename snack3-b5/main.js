console.log('connesso');

/*

Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

*/

const userString = prompt('Inserisci una parola');

console.log(userString);

function reverseString(string) {

    return string.split('').reverse().join('');
}

const reversed = reverseString(userString);

console.log(reversed);