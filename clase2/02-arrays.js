// Los arrays son una estructura de datos, caracterizada por que sus datos se "encadenan"
// en por asi decirlo filas, donde cada dato tiene una posicion definida.

// Se define con corchetes, y sus elementos se dividien con comas

let array = ["naranja", "zanahoria", "lechuga", "papa", "tomate"];
// indices      0           1            2        3        4

// Mostramos "lechuga"
console.log(array[2]);

// Para agregar un elemento al final:
array.push("ajo");

console.log(array);

// Para agregar un elemento al principio
array.unshift("manzana");

console.log(array);

// Para sacar el ultimo elemento:
array.pop();

console.log(array);

// Para borrar el primer elemento:
array.shift();

console.log(array);
