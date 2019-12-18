const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

// https://platzi.com/clases/1339-fundamentos-javascript/12959-callbacks82-6/

function obtenerPersonaje(id) {
  return new Promise(function(resolve, reject) {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function(data) {
      resolve(data);
    }).fail(function() {
      reject(id);
    });
  });
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}


var ids = [1, 2, 3, 4, 5, 6, 7];
// var promesas = ids.map(function(id) {
//     return obtenerPersonaje(id);
// })
var promesas = ids.map( id => obtenerPersonaje(id))
Promise
.all(promesas)
.then(personajes => console.log(personajes))
.catch(onError)


// obtenerPersonaje(1)
// .then(function(personaje1) {
//     console.log(`El personaje 1 es ${personaje1.name}`);
//     return obtenerPersonaje(2)
// }) .then(function(personaje2) {
//     console.log(`El personaje 2 es ${personaje2.name}`);
//     return obtenerPersonaje(3)
// }) .then(function (personaje3) {
//     console.log(`El personaje 3 es ${personaje3.name}`);
//     return obtenerPersonaje(4)
// })  .then(function (personaje4) {
//     console.log(`El personaje 4 es ${personaje4.name}`);
// })
// .catch(onError)


// for (var i = 1; i <= 10; i++) {
//     obtenerPersonaje(i, function (personaje) {
//              console.log(`Hola, yo soy ${personaje.name}`)
// })
// }
