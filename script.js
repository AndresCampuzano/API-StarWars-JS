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

obtenerPersonaje(1).then(function(personaje) {
    console.log(`El personaje 1 es ${personaje.name}`);
}) .catch(onError)


// for (var i = 1; i <= 10; i++) {
//     obtenerPersonaje(i, function (personaje) {
//              console.log(`Hola, yo soy ${personaje.name}`)
// })
// }
