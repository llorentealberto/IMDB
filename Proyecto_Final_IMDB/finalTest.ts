import { Imdb } from "./imdb";
import { Movie } from "./movie";
import { Professional } from "./professional";

let nombreArchivo = "immdbBBDD.json";
let imdb = Imdb.obtenerInstanciaIMDB(nombreArchivo);
let nuevoProfesional = new Professional("Brad Pitt", 55, 75, 180, false, "Estadounidense", 2, "Actor");

if(imdb.movies.length > 0) {
    let primeraPelicula = imdb.movies[0];
    if(!primeraPelicula.actors) {
      primeraPelicula.actors = [];
    }
    primeraPelicula.actors.push(nuevoProfesional);
}
imdb.escribirEnFicheroJSON(nombreArchivo);
console.log(`Nuevo profesional agregado a ${imdb.movies[0].title}`);