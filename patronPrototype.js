
function Persona(apellido, nombre)
{
    this.apellido = apellido;
    this.nombre = nombre;
}

Persona.prototype.getApellido = function(){
    return this.apellido;
};

Persona.prototype.getNombre = function(){
    return this.nombre;
};

/* ----------ESTUDIO1------------
Persona.prototype.addNewAttribute = function(){
    this.addNewAttribute = 'nuevo atributo String';
    return this.addNewAttribute;
};
Estudiar como se añaden los atributos a un objeto
simplemente poniendo el this lo añade directamente
si aun no esta añadido
-----------------ESTUDIO1----------
*/

let person= new Persona('Perez','Juan');
console.log(person);

/*
--------------ESTUDIO1---------------
person.addNewAttribute();
console.log(person); //Este person debe tener el nuevo atributo en el proto
---------------ESTUDIO1----------------
*/


//Creamos SuperHero heredando de Persona
function SuperHero(apellido,nombre,powers)
{
    //Este call llama a la funcion constructora de Persona
    //Pero no crea herencia en los metodos de Persona ni na
    Persona.call(this, apellido, nombre);
    this.powers = powers;
}

//Esta linea es la que crea la herencia con Persona
//Coge todo el prototype que tiene Persona
//En el prototype de Persona estan todos sus metodos
/*IMPORTANTE: Si no hacemos Object.create() todos los
metodos que añadamos en el prototype de SuperHero se
añadiran al prototype de Persona tambien por lo tanto
en este caso Persona tendria el metodo getPowers()
cuando este fuese definido */
SuperHero.prototype = Object.create(Persona.prototype);

//Ahora que tenemos el prototype de Persona, añadimos
//mas metodos para el prototype de SuperHero
SuperHero.prototype.getPowers = function(){
    return this.powers;
} 

let heroe = new SuperHero('Dominguez',"Batman","ninguno churra lo que tiene es dinero");

console.log(heroe);