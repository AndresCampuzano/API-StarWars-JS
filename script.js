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

async function obtenerPersonajes() { //https://platzi.com/clases/1339-fundamentos-javascript/12966-async-await-lo-ultimo-en-asincronis-9/
    var ids = [1, 2, 3, 4, 5, 6, 7];
    var promesas = ids.map( id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}


obtenerPersonajes()