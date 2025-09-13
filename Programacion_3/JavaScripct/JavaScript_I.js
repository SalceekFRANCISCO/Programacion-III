// Comentario de una sola linea

/* Comentario de
multiples
lineas
*/
ab
/* La consola de JS es una herramienta de depuracion en el navegador web.
Permite ejecutar comandos en JavaScript, ver mensajes de registro y errores,  y hacer pruebas interactivas de codigo

La abrimos con F12 o boton derecho + Inspeccionar (pestaña consola)
*/

console.log("Hola mundo desde JavaScript");


/*======================= 
Variables en JavaScript
=========================

Almacenan datos que pueden ser reutilizados y modificados

- var: Declaracion historica pero con limitaciones como el hoisting. No recomendada

- let: Introducido en ES6 (ECMAScript 2015). Permite declarar variables que pueden cambiar y tien un alcance de bloque, lo que mejora el control sobre donde y cuando se puede acceder a la variable

- const: Introducido en ES6. Permite declarar variables que no se deben reasignar. El valor en un const puede ser modificado en caso de ser un objeto o un array, pero la referencia no puede cambiar 


===========================
Tipos de datos primitivos
===========================

- Numeros:      Valores numericos
- Cadenas:      Texto encerrado entre comillas simples '' y comillas dobles ""
- Booleanos:    true o false
- null:         Representa un valor intencionalmente vacio
- undefined:    Una variable que fue declarada pero no tiene valor
*/

let numero = 42;
let texto = "Hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(indefinido);



/* ========================
Operadores en JavaScript

https://www.w3schools.com/js/js_operators.asp
==========================*/

// Operadores aritmeticos
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// Operadores de asignacion
let x = 10;
console.log(x);

x += 5; // x = x + 5
console.log(x);

x -= 2; // x = x - 2
console.log(x);


// Operadores de comparacion
let y = 5;
let z = "5";

console.log(y == z);
console.log(y === z);


// Operadores logicos
let c = true;
let d = false;

console.log(c && d);    // false, ambos deben ser true
console.log(c || d);    // true, al menos uno es true
console.log(!c);        // false, invierte el valor de c


// Operadores de tipo
// Permiten verificar el tipo de un valor o su relacion con clases/constructores
console.log(typeof 42);     // number
console.log(typeof "42");   // string
console.log([] instanceof Array); // true


// Operadores de incremento y decremento
let e = 10;
console.log(e);

e++;
console.log(e);

e--;
console.log(e);

++e;
console.log(e);