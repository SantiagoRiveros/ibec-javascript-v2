// Condicionales:

// Cuando se cumple una condicion, se ejecuta un bloque u otro de codigo.

let edad = 18;

if (edad < 18) {
  console.log("Es menor de edad");
} else if (typeof edad != "number") {
  console.log("Tipo de dato no valido");
} else if (edad < 0 || edad > 100) {
  console.log("Rango de edad no valido");
} else {
  console.log("Es mayor de edad");
}

// Podemos aplicar condicionales a traves de operadores ternarios

// Operador ternario:

// condicion ? Bloque de codigo o valor : Bloque que funciona como else

let edad2 = 18;

let esMayorDeEdad =
  edad < 18 || typeof edad !== "number" || edad < 0 ? false : true;
