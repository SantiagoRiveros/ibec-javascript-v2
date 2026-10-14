// Las variables pueden almacenar distintas clases de datos. Esta clases se demoninan
// tipos de datos

// STRING: Cadenas de texto
// Representan texto y se escriben entre comillas

let nombre = "Santiago";
let mensaje = "Hola, como estas?";

// NUMBER: Numeros
// Javascript utiliza el tipo number tanto para numeros enteros como decimales.

let edad = 25;
let precio = 1500.5;
let temperatura = -3;

// No hace falta escribir los numeros entre comillas

// BOOLEAN: valores logicos
// Solo pueden tomar dos valores: verdadero o falso (true o false)

let esMayorDeEdad = true;
let tieneDescuento = false;

// Son especialmente utiles para las condiciones que veremos mas adelante.

// UNDEFINED: indefinido

// Una variable declarada con let pero sin un valor asignado tiene el valor undefined

let apellido;
console.log(apellido); // undefined, significa que la variable existe pero sin un valor

// NULL: nulo
// null representa la ausencia intencional de un valor

let segundoNombre = null;
console.log(segundoNombre);

/* 
diferencia conceptual:
-undefined: todavia no se asigno un valor
-null: indicamos explicitamente que no hay un valor
*/

// CONSULTAR EL TIPO DE UNA VARIABLE:

let nombreString = "Santiago";
let edadNumber = 33;
let tieneTrabajo = true;

// consultamos con typeof
console.log(typeof nombreString);
console.log(typeof edadNumber);
console.log(typeof tieneTrabajo);
