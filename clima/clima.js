const axios = require('axios'); // La misma función que request pero con promesas

const getClima = async(lat, lng) => {



    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=d9a47e3a155fd8917038b3bdda702984`) // espera que la peticion regrese. Lo que regrese lo metes en respuesta 
    return response.data.main.temp;


}




module.exports = {
    getClima
}