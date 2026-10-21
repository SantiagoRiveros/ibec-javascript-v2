// Los objetos son otra estructura de datos, caracterizada por
// Tener pares de clave-valor
// let objeto = {
//      clave1: valor1,
//      clave2: valor2
// }

let usuario = {
  nombre: "Carlos",
  apellido: "Monzon",
  curso: "Javascript",
};

// Como accedo a un valor?:

// Vamos a mostrar el curso:

console.log(usuario.curso); // esto es dot notation, basicamente variable punto clave

// bracket notation:
console.log(usuario["nombre"]);

let clave = "nombre";

console.log(usuario[clave]);
