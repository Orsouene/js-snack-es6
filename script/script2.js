// Creazione della tabella di  squadre di calcio

const squadreCalcio = [
  // squadra-1
  {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  // squadra-1
  {
    nome: "Ac-Milan",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  // squadra-1
  {
    nome: "As-Roma",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];
// assegnare un numero random per le puntiFatti e le Falli subiti per ogni squadra
let randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let arrayFinale = [];
let i = 0;

for (i = 0; i < squadreCalcio.length; i++) {
  squadreCalcio[i].falliSubiti = randomNumber;
  squadreCalcio[i].puntiFatti = randomNumber;
  arrayFinale.push(
    "La squadra di : " +
      squadreCalcio[i].nome +
      " ha subito " +
      squadreCalcio[i].falliSubiti +
      " Falli"
  );
}
// Stampare l'array con i numeri random assegnati
console.log(arrayFinale);
