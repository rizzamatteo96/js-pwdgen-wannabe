// check se funziona il collegamento con js
// console.log('funziona?');

// dichiarazione delle variabili
var nome, cognome, colorePreferito, risultatoConcat;

// lettura del nome
nome = prompt('Inserisci il tuo nome');
// console.log(nome);

// lettura del cognome
cognome = prompt('Inserisci il tuo cognome');
// console.log(cognome);

// lettura del colore preferito
colorePreferito = prompt('Inserisci il tuo colore preferito');
// console.log(colorePreferito);

// scrittura e visualizzazione della concatenazione
risultatoConcat = nome + cognome + colorePreferito + '21';
// console.log(risultatoConcat);

// visualizzazione risultato in html
document.getElementById('pwd-gen').innerHTML += risultatoConcat;