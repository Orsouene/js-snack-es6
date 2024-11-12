// /////////////Snack-1//////////////////

// tabella di diversi nomi di biciclette con il loro peso
const biciclette = [
  //    bicicletta 1
  { nome: "bmx", peso: 20 },
  //    bicicletta 2
  { nome: "Speedster", peso: 18 },
  //    bicicletta 3
  { nome: "TrailBlazer", peso: 22 },
  //    bicicletta 4
  { nome: "Pathfinder", peso: 15 },
  //    bicicletta 5
  { nome: "SpinMaster", peso: 17 },
];
// Inizializzo la variabile con la prima bicicletta
biciLeggera = biciclette[0];
// Ciclo per confrontare i pesi di tutti le biciclette
for (let i = 0; i < biciclette.length; i++) {
  if (biciLeggera.peso > biciclette[i].peso) {
    biciLeggera = biciclette[i];
  }
}
// stampare il nome e il peso della  bici il piu leggera
console.log(
  "La bicicletta con il peso il piu leggero è : " +
    biciLeggera.nome +
    " con un peso di : " +
    biciLeggera.peso
);
