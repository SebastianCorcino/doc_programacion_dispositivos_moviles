//The Basics

// accede a una propiedad llamada toLowerCase
// luego la llama.
const message = "Hello World!";
message.toLowerCase();
// Aqui esta llamando a 'message' y esta no es una funcion.
message();

// Si está familiarizado con JavaScript,
// sabrá que esto falla con una excepción

// Lo que busca TypeScript es evitar errores como este

const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined

// JavaScript nos da un comportamiento diferente
// y devuelve el valor undefined:

// En TypeScript, el siguiente código produce un error
// sobre location no estar definido:

// la intención es detectar errores legítimos en nuestros programas.
// Y TypeScript detecta muchos errores legítimos.

//Everyday Types

//Tipos utilizados comunmente:

// String
const myName: string = "Sebastian";
// Number
const num: number = 3;
// Booleano
const bool: boolean = true;
// Arreglos
const arregloCadena: string[] = ["yo", "tu", "el"];
const arregloNum: number[] = [1, 2, 3];
//Any
let loQueSea: any = 7;
loQueSea = "hello";

// Funciones
// Declarar qué tipos de parámetros acepta la función
function Saludo(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

Saludo(7);

//Narrowing

function ejecutarAlgo(value: string | number | boolean) {
  //Si es string se llama a la funcion anterior de Saludo

  if (typeof value == "string") {
    Saludo(value);
  }

  //Si es numero se le agrega +1

  if (typeof value == "number") {
    value++;
    console.log(value);
  }

  //Si es booleano se cambia al valor contrario

  if (typeof value == "boolean") {
    value = !value;
    console.log(value);
  }
}

ejecutarAlgo("yo");
ejecutarAlgo(7);
ejecutarAlgo(true);
