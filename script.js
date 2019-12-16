const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

// https://platzi.com/clases/1339-fundamentos-javascript/12959-callbacks82-6/


function obtenerPersonaje (id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, callback).fail(function() {
        console.log(`Error, unable to get id: ${id}`)
    });
}

// Esto es un callback, para controlar el asincronismo y que los datos sean mostrados en orden.
obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)
                })
            })
        })
    })
})

// for (var i = 1; i <= 10; i++) {
//     obtenerPersonaje(i, function (personaje) {
//              console.log(`Hola, yo soy ${personaje.name}`)
// })
// }