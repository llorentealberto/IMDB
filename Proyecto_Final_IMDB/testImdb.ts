import * as fs from 'fs'; 
import { Imdb } from "./imdb";
import { Movie } from "./movie";

import { Professional } from "./professional";

// voy a crear tres movie diferentes para luego emterlas en la clase imdb 

const movie1=new Movie("armagedon" , 1998 , "american" ,"accion");

const movie2=new Movie("pesadilla en elm street" , 2015 ,"american" , "terror");

const movie3=new Movie("V de Vendetta" , 1995 , "american" , "thriller");

export let totMovies=[movie1 ,movie2 , movie3];

let pruebaImdb = new Imdb(totMovies);

console.log((pruebaImdb.movies));


console.log(pruebaImdb.toString());

const nombreArchivo= "imdbBBDD.json";

fs.writeFileSync(nombreArchivo , pruebaImdb.toString() , 'utf-8');

console.log('prueba para ver si se guarda en ' + nombreArchivo);



