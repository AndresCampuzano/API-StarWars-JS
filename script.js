const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

// https://platzi.com/clases/1339-fundamentos-javascript/12959-callbacks82-6/


function obtenerPersonaje (id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if(callback){
            callback();
        }
    });
}

// Esto es un callback, para controlar el asincronismo y que los datos sean mostrados en orden.
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5)
            })
        })
    })
})