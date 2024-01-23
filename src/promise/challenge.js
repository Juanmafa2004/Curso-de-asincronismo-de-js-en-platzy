import fetch from 'node-fetch';//se importo fetch 

//  se agrego en el package.json un campo extra el type : module para que funcione el fetch esto es necesario ya que no estamos trabajando con el navegador sino directo con la extension code runner de vsc.

//definimos nuestra api
const API = 'https://api.escuelajs.co/api/v1';


//creamos una funcion que pasemos una api y nos devuelve el llamado de fetch con la api

function fetchData(urlApi){
    return fetch(urlApi);
}

//llamado de la funcion este siguiente ejemplo nos trae todos los productos de la api de platzi.
//agregamos un then para saber que hay en su respuesta y la pasamos a un json
/*fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products)//mostramos que tiene esta peticion en este caso los productos 
}) //podemos anidar multiples then si deseamos
.then(()=>{
    console.log('hola'); //se ejecutara despues del llamado del anterior then
})
.catch(error => console.log(error)); //tambien podemos agrepar el error si llegua a ocurrir para mostrar en la consola.*/

//funcion para hacer varios llamados

fetchData(`${API}/products`)
.then(response=> response.json())//transformamos la repuesta en un objeto json.
.then(products =>{
    console.log(products); //mostramos los products
    return fetchData(`${API}/products/${products[0].id}`) //traemos los datos del id en especifico
})
.then(response =>response.json()) //traemos los datos anteriores en un objeto json.
.then(product =>{
    console.log(product.title) //mostrara el title ldel producto de la peticion
    return fetchData(`${API}/categories/${product.category.id}`); //hacemos la peticion ahora de la categoria 
})
.then(response =>response.json())//transformamos la anterior peticion en un objeto json para leerlo.
.then(category =>{
    console.log(category.name); //retornamos el nombre de la categoria en este console.log
})
.catch(err => console.log(err))
.finally(console.log("ejecutado correctamente"));
 
