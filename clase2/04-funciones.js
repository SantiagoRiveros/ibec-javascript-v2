// Las funciones son fragmentos o bloques de codigo
// Que pueden ser adaptables, modulares, granulares, y reutilizables.

// Tenemos varias forams de declararlas:

// Forma clasica:

function saludar() {
  console.log("Hola");
}

// Por asignacion de variable, con una funcion anonima

const funcion = function () {
  console.log("Hola");
};

// Arrow function:

const saludar2 = () => console.log("Hola");

// las arrow function, permiten qu esi es de una sola linea, evites usar llaves y el return

// una funcion puede recibir argumetnos, los cuales puede utilizar:

const suma = (numero1, numero2) => {
  return numero1 + numero2;
}; // Aca uso las llaves y el return, con fines ilustrativos, pero podria no usarlo.

// Parametros por defecto
// Podemos darles valores por defecto.

const resta = (numero1 = 0, numero2 = 0) => {
  return numero1 - numero2;
};

// Si yo llamo a esta funcion y no le paso ningun valor, va a tomar los que tien epor defecto
