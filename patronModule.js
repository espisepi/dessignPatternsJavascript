/*Ese tipo de declaración se conoce como IIFE (Immediately-Invoked-Function-Expressions), y como su nombre
lo dice es una función que se ejecuta de manera inmediata. Esta función crea un nuevo scope y genera 
“privacidad”, sin embargo JavaScript no maneja el concepto de “privacidad”, pero al generar un nuevo scope
podemos simularlo, esto se logra envolviendo toda la lógica del aplicativo dentro de un contenedor. La idea
es solo retornar las partes que nosotros necesitamos, y dejar las otras partes del código fuera del scope
global.*/

/*(function() {

    // declare private variables and/or functions

    return {
      // declare public variables and/or functions
    }

})(); */


//El ( () => {dentroDeLaFuncion} ) crea funciones con su propio scope, por lo tanto existe privacidad
let myModule = ( () => {

    let publicFunction = {};
    
    //Variable privada porque no la pongo en el return
    let contLlamadasAlMetodoSuma = 0;

    //Todos los metodos privados empiezan con _
    _aumentarContador = () => {contLlamadasAlMetodoSuma++;}

    //Los metodos publicos los meto dentro del objeto publicFunction que sera el que devuelva
    //en el return de la funcion myModule
    publicFunction.suma = (a,b) => {
        _aumentarContador();
        return a+b;
    }

    publicFunction.getContador = () => {return contLlamadasAlMetodoSuma}

    return publicFunction;
});

let module1 = myModule();
let module2 = myModule();
module1.suma(3,2);
console.log(module1.getContador()); //Devuelve 1 porque he ejecutado la suma una vez
console.log(module2.getContador()); //Devuelve 0 porque no he ejecutado la suma en esta instancia


//Si quiero que sea un singleton hago que se ejecute la funcion al final de declararla poniendo })();
//Y ahora la variable myModule es un Json con lo que devuelve la funcion en vez de ser una funcion que se
//puede ejecutar en todo momento como ocurre en este caso
//IMPORTANTE: El singleton original (en su esencia) necesita un poquito mas de codigo
