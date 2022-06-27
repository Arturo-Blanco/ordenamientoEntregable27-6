let dimensionArreglo: number = Number(prompt("Ingrese dimension del arreglo"));
let nombres: string[] = new Array(dimensionArreglo);
let años: number[] = new Array(dimensionArreglo);
let alturas: number[] = new Array(dimensionArreglo);

let i: number;
let j: number;

for (let numPerson: number = 0; numPerson < dimensionArreglo; numPerson++) {
  let nombre: string = String(prompt(`Nombre persona n° ${numPerson + 1}: `));
  let año: number = Number(
    prompt(`Ingrese años de la persona n° ${numPerson + 1}: `)
  );
  let altura: number = Number(
    prompt(`Ingrese altura de la persona n° ${numPerson + 1}: `)
  );
  i = 0;
  while (i < numPerson && años[i] > año) {
    i++;
  }
  for (j = numPerson; j > i; j--) {
    nombres[j] = nombres[j - 1];
    años[j] = años[j - 1];
    alturas[j] = alturas[j - 1];
  }
  while (años[i] === años[j]) {
    nombres[j] = nombres[j - 1];
    años[j] = años[j - 1];
    alturas[j] = alturas[j - 1];
    break;
  }
  nombres[i] = nombre;
  años[i] = año;
  alturas[i] = altura;
}

for (let posicion: number = 0; posicion < dimensionArreglo; posicion++) {
  console.log(`(${posicion}) Nombre: ${nombres[posicion]},
  Años: ${años[posicion]},
  Altura: ${alturas[posicion]} `);
}
