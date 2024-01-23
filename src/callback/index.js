function sum(num1,num2){
    return num1 + num2;

}

//recebira el callback
function calc(num1, num2, callback){
    return callback(num1, num2);
};

console.log(calc(2,2, sum));


//con setTimeout ya usamos del lado del cliente

setTimeout(function () {
    console.log('hola javascript');
}, 2000)

function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Oscar')//function, time , arguments