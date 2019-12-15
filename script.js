const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

// https://platzi.com/clases/1339-fundamentos-javascript/12959-callbacks82-6/

const opts = { crossDomain: true };

const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name} y peso ${persona.mass} kg`)
};

function obtenerPersonaje (id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);