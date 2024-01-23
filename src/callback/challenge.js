//referencia al recurso del xml
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1'; //se pone en mayusculas por que es una convencion que le dice a los que vean nuestro codigo que no deben cambiar esto

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest(); //se hace una instancia del xmlhttprequest

    xhttp.open('GET', urlApi, true)//se activa la api con open, se pone con metodo get, el otro parametro es el link de la api y el utlimo es true para habilitar
    
    xhttp.onreadystatechange = function (event){ //nos ayudara a mirar el estado en el que se encuentra la disponibildad de la api.
        if(xhttp.readyState === 4){
          //0 no inica 1 loading 2 zen ejecuta 3  trabajando 4 completado la llamada
          if(xhttp.status === 200){//repuesta satisfactoria
            callback(null, JSON.parse(xhttp.responseText));

          }else{
            const error = new Error('Error'+ urlApi);   
            return callback(error, null)
           }
        }
    }
    xhttp.send();
}

//llamado de esta funcion

fetchData(`${API}/products`, function (error1, data1){//se coloco la url que vamos a usar para la api y tambien una funcion sin nombre para mostrar el error y la data
  if(error1)return console.error(error1); //si hay in error se dentendra la ejecucion y se imprimira el error.
  //sino debera continuar la peticion y pasar el dato 1
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2){
    if(error2)return console.error(error2);//me imprime el error dos

    //anidamos otro fetchdata para obtener los valores data2 pero en categorias y los signos de interrogacion son para preguntar si existe la solicitud hecha.
    fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
      //podemos dar los niveles que queramos pero no es recomendado ya que podemos terminar generando codigo spaguetti y un callbackhell
      if (error3)return console.error(error3);
      //aqui ya acabamos la anidacion y empezamos traer las peticiones de lo que deseamos de cada dato  
      console.log(data1[0]); //traemos el objeto
      console.log(data2.title); //traemos el titulo del dato 2
      console.log(data3.name); //traemos el nombre
    });

  });

});



