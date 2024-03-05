console.log('connesso');

/*
SNACK 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/

const animalsList = [
  {
    nome: "Leone",
    famiglia: "Felidi",
    classe: "Mammiferi"
  },
  {
    nome: "Aquila Calva",
    famiglia: "Accipitridi",
    classe: "Uccelli"
  },
  {
    nome: "Balena Azzurra",
    famiglia: "Balaenopteridi",
    classe: "Mammiferi"
  },
  {
    nome: "Tartaruga Marina",
    famiglia: "Cheloniidi",
    classe: "Rettili"
  },
  {
    nome: "Farfalla Monarca",
    famiglia: "Ninfalidi",
    classe: "Insetti"
  },
  {
    nome: "Ghepardo",
    famiglia: "Felidi",
    classe: "Mammiferi"
  },
  {
    nome: "Orca",
    famiglia: "Delfinidi",
    classe: "Mammiferi"
  },
  {
    nome: "Ragno Saltatore",
    famiglia: "Salticidi",
    classe: "Ragni"
  },
  {
    nome: "Delfino Narvalo",
    famiglia: "Monodontidi",
    classe: "Mammiferi"
  },
  {
    nome: "Elefante Africano",
    famiglia: "Elefanti",
    classe: "Mammiferi"
  }
];

console.log(animalsList);

// Crea un nuovo array con la lista dei mammiferi utilizzando il metodo .filter()

const mammiferiList = animalsList.filter(animal => animal.classe === 'Mammiferi');

console.log(mammiferiList);