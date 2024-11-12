// Bonus
// un array come esempio
let myArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
// indici a
let a = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
// stampare il valore di a
console.log("Il valore di a è : " + a);
// indici b
let b = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
// stampare il valore di b
console.log("Il valore di b è : " + b);
function myFunction(Array, a, b) {
  // se a>0=b
  if (a >= b) {
    // Stampare il messaggio d'errore
    console.log("a devi essere piu grande di b ");
    return;
  }
  //   se b-a =
  else if (b - a === 1) {
    // Stampare il messaggio d'errore
    console.log(" il resultato di ( b - a ) devi essere >1");
    return;
  }
  //   se b>a
  else if (b > a) {
    // Restituisco un nuovo array con gli elementi dell'altro array che si trovano negli indici da a+1 e( b (escluso da default ))
    return Array.slice(a + 1, b);
  }
}
// Stampare  i valori che hanno la posizione compresa tra a e b  :
const resultatoFinale = myFunction(myArray, a, b);
console.log(resultatoFinale);
