// Un condicional, nos permite ejecutar un bloque de codigo, si se cumple cierta condicion:

/* 
if (condicion){
    bloqueDeCodigo
}
*/

let edad = 33;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else if (edad < 18) {
  console.log("Es menor de edad");
} else {
  console.log("Valor no valido");
}

/* 
Reglas de cadenas de condicionales:

1- SIEMPRE empieza con if
2- No es necesario que continue con else if o else, puede ser solo un if
3- El if es SIEMPRE la primera opcion, else en caso de aplicarse es SIEMPRE la ultima opcion
4- No es necesario el else if, puede ser solo if-else o solo if
5- else y else if no pueden ir "solos", es decir, empezar con ese condicional sin haber if
6- puede haber varios else if en una misma cadena
7- SOLO un if y un else maximo por cadena. 

*/
