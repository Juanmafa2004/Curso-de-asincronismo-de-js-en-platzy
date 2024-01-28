import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, {//se esta creando un objeto con la informacion con la que vamos a enviar en la api
        //metodo enviar
        method: 'POST',
        mode: 'CORS',  //se relaciona con los CORS es decir los permisos que  va tener.
        credentials: 'same-origin', //si no esta enviando ninguna autenticacion no pasa nada
        headers: {//cabeceras que se enviar en la solicitud para que nos reconozcan
            'Content-Type': 'application/json' //tipo de archivo que estamos enviando
                },
        body: JSON.stringify(data) //informacion que estamos trasmitiendo en este caso de objeto a texto
        

    });
    return response;
}

const dataProduct = {
    "title": "New Juan Product",
    "price": 100,
    "description": "its an attemp to create a product usin the post method",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

postData(`${API}/products`,dataProduct )
.then(response => response.json())//hacemos el then para ver que me responde el serivdor
.then(data=> console.log(data)) //los datos nos los muestra del anterior .then

