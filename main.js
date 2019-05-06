// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.

// creo un oggetto studente
var studente = {
  'nome': 'Mario',
  'cognome': 'Rossi',
  'eta': 20
};

// stampo attraverso il for in le propietà dello studente
for (var field in studente) {
  console.log(studente[field])
};

// creo una riga vuota tramite un console.log
console.log(' ');

// creo un arrey di oggetti di studenti
var studenti = [
{
  'nome': 'Luca',
  'cognome': 'Verdi',
  'eta': 26
},
{
  'nome': 'Francesco',
  'cognome': 'Ferrari',
  'eta': 30
},
{
  'nome': 'Captain',
  'cognome': 'America',
  'eta': 28
}
];

// stampo tramite un ciclo for le proprietà nome e cognome degli oggetti dell'array studenti
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + ' ' + studenti[i].cognome);
};

// creo una riga vuota tramite un console.log
console.log(' ');

// creo 3 prompt per inserire 3 proprieta di un nuovo oggetto
var inserisci_nome = prompt('Inserisci nome');
var inserisci_cognome = prompt('Inserisci cognome');
var inserisci_eta = prompt('Inserisci eta');

var nuovo_studente = {
  'nome': inserisci_nome,
  'cognome': inserisci_cognome,
  'eta': inserisci_eta
};

// inserisco il nuovo oggetto nell'array
studenti.push(nuovo_studente);

// stampo un console.log dell'array aggiornato
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + ' ' + studenti[i].cognome + ' ' + studenti[i].eta)
};
