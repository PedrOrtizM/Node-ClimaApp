//
const lugar = require('./place/lugar');
const clima = require('./clima/clima');

// Options es diferente a command porque no recibe ninguna palabra 
const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



let getInformacion = async(direccion) => {

    try {

        let coors = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coors.latitud, coors.longitud);

        return `El clima en ${ coors.direccion } es de ${ temp }°C`;
    } catch (e) {
        return 'No se pudo determinar el clima en ' + direccion;
    }
}


getInformacion(argv.direccion)
    .then(response => console.log(response))
    .catch(err => console.log(err));