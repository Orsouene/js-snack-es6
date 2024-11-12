// Bonus
let myArray = [];
let a = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(a);
let b = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(b);
function myFunction(myArray) {
  let resultato;
  let i = 1;

  for (i = 1; i < b; i++) {
    if (b > a) {
      //   il resultato è b - 1 inizialmente e poi incremento la i di 1
      resultato = b - i;
      //   finche il resultato e magiore di a
      if (resultato > a) {
        //   console.log("resultato " + resultato);
        myArray.push(resultato);
        //   console.log(myArray);
      }
    }
  }
  return myArray;
}
const resultatoFinale = myFunction(myArray);
console.log(resultatoFinale);
