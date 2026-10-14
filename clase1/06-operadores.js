// Operadores aritmeticos
let numero1 = 10;
let numero2 = 3;

console.log(numero1 + numero2); // Suma
console.log(numero1 - numero2); // Resta
console.log(numero1 * numero2); // Multiplicacion
console.log(numero1 / numero2); // Division
console.log(numero1 % numero2); // Modulo, el resto de la division entera
console.log(numero1 ** numero2); // Potencia

// Operadores de asignacion

// Asignacion:
let puntos = 10;

// Asignacion suma:
puntos += 5; // 15

// Asignacion resta:

puntos -= 3; // 12

// asignacion multiplicacion:

puntos *= 2; // 24

// asignacion division

puntos /= 3; // 8

// asignacion modulo:

puntos %= 3; // 2

// Operadores de comparacion:
// Permite comparar dos valores, el resultado es un booleano, true o false.

let edad = 20;

// Mayor que
console.log(edad > 18); // true

// Menor que
console.log(edad < 18); // false

// Mayor igual
console.log(edad >= 20); // true

// menor igual
console.log(edad <= 17); // false

// igualdad:
console.log(edad == "20"); // true, compara solo valor, y no tipo

// Igualdad estricta:
console.log(edad === "20"); // false, porque el valro es el mismo, pero no el tipo

// desigualdad
console.log(edad !== "Hola"); // true

// OPERADORES LOGICOS:
// Permiten combinar condiciones, devuelven un valor booleano

// AND && : Ambas condiciones deben ser verdaderas:

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR || : Cualquiera de las dos condiciones debe ser verdaderas:
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// NOT ! : Invierte el estado de veracidad:
console.log(!true); // false
console.log(!false); // true

// Ejemplos:

console.log(20 > 18 && 20 !== "Hola"); // true
console.log(20 > 21 || 20 > 19); // true
console.log(!(20 > 18)); // false
