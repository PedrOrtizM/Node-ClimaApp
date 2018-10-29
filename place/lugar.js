const axios = require('axios'); // La misma función que request pero con promesas


// Cuando se pone el async eso regresa una promesa
const getLugar = async(direccion) => {

    let encodeURL = encodeURI(direccion); // Pasa una cadena a URL valido 
    let URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}a&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`;

    let response = await axios.get(URL) // espera que la peticion regrese. Lo que regrese lo metes en respuesta 

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados para la ciudad ' + direccion)
    }


    //  console.log(JSON.stringify(response.data, undefined, 2)); // Para desplegar todos los objetos de la respuesta

    let latitud = response.data.results[0].geometry.location.lat;
    let longitud = response.data.results[0].geometry.location.lng;
    let place = response.data.results[0].formatted_address;


    return {
        direccion: place,
        latitud: latitud,
        longitud: longitud
    }

}

module.exports = {
    getLugar
}