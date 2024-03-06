console.log('connesso');

/*

Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*BONUS*
Stampare in pagina oltre che in console!

*/

const footballTeams = [
    {
        nome: 'Squadra1',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Squadra2',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Squadra3',
        puntiFatti: 0,
        falliSubiti: 0
    },
];

// creo un ciclo foreach per generare numeri random all'interno della lista

footballTeams.forEach(team => {

    team.puntiFatti = Math.floor(Math.random() * 50) + 1;
    team.falliSubiti = Math.floor(Math.random() * 50) + 1;
});

console.log(footballTeams);

// creo un ciclo con il metodo map per creare un array solo con nome e fallisubiti

const newFootballTeamsList = footballTeams.map(team => {
    // utilizziamo la destrutturazione
    const {nome, falliSubiti} = team;

    return {nome, falliSubiti};
});

console.log(newFootballTeamsList);

