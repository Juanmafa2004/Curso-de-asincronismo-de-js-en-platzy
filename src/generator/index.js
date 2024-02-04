//creamos una funcion que nos permita crear una funcion que nos ayuda controlar el iterador lo cual nos deja pausar o retomar en cualquier momento lo que queramos


function* gen(){//el asterisco para identificarla como funcion generator 
    yield 1; //steps que podemos llamar segun la necesidad.
    yield 2;
    yield 3;
}
 

const g = gen();

//next nos permite ir iterando por cada uno de los elementos de está logica

console.log(g.next().value);//optenemox en este caso el primel valor
console.log(g.next().value); //accedemos ahora al valor 2

//arreglo que vamos ir iterando uno a uno
function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['oscar','luisa', 'ana', 'juan']);
//se nos retorna el primer value del array y tambien el done  si despues del next agregamos el .value solo accederemos a los valores de nuestro array;

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//si nos pasamos de los valores del array nos da el resultado undefined
console.log(it.next().value);












