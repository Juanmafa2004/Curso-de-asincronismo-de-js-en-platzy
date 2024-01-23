//una promesa tiene tres estados cumplido, pendiente o rechazado

const promise = new Promise(function(resolve, reject){
    resolve('hey! todo correcto');
});

const cows = 15;

//se crea para este ejemplo una validacion si se cuenta con las vacas necesarias en la granja para cumplir la couta de leche 

const countCows = new Promise (function(resolve, reject){
    if (cows >10){
        resolve(`We have ${cows} cows on the farm`); //se uso el resolve para poner el estado de cumplido de la promesa

    }else{
        reject('There is not enought cows on the farm'); //se uso el reject para mostrar el estado de rechazado de la promesa
        
    }

}) ;

countCows.then((result) => {
    console.log(result);
}).catch((error)=>{
     console.log(error);
}).finally(()=> console.log('finally'))