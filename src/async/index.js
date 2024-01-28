const fnAsync = () =>{
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(()=> resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    
    });
}

const anotherFn = async ()=> {
    const  something = await fnAsync();
    console.log(something);
    console.log('hello'); //espera obtener el resultado de something para continuar pero solo en esta funcion asincrona pero no detiene el flujo 
}

console.log('Before'); //se ejecuta primero
anotherFn();//espera dos segundos se ejecuta despues del after.
console.log('after'); //se ejecuta segundo