class Persona
{
    constructor(apellido, nombre){
        this.apellido = apellido;
        this.nombre = nombre;
    }

    getApellido(){
        console.log('Mi apellido es: '+this.apellido);
    }

    getNombre(){
        console.log('Mi nombre es: '+this.nombre);
    }
}

let person = new Persona("Perez","Juan");
console.log(person);

class SuperHero extends Persona
{
    constructor(apellido, nombre, powers){
        super(apellido,nombre);
        this.powers = powers;
    }

    getSuperHero(){
        console.log('mis powers son: '+this.powers);
    }

}

let hero = new SuperHero('Dominguez','Spiderman','trepar');
console.log(hero);