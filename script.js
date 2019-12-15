const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

// https://platzi.com/clases/1339-fundamentos-javascript/12959-callbacks82-6/

const lukeurl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true };

const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name} y peso ${persona.mass}`)
};

$.get(lukeurl, opts, onPeopleResponse);