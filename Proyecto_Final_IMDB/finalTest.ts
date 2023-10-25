import { Imdb } from "./imdb";
import { Movie } from "./movie";
import { Professional } from "./professional";
let readlineSync = require (`readline-sync`); 

let nombreArchivo = "immdbBBDD.json";

let movie10 = new Movie ("50 sombras", 2010, "EEUU", "Science ficcion")
let movie11 = new Movie ("50 sombras 2", 2012, "EEUU", "Science ficcion")
let movie12 = new Movie ("50 sombras 3", 2020, "EEUU", "Science ficcion")
let arrayMovies = [movie10,movie11,movie12]; 
let imdbfinalTest = new Imdb(arrayMovies); 

imdbfinalTest.escribirEnFicheroJSON(nombreArchivo); 

let name: string = readlineSync.question ("¿Cual es el nombre? ");  
let age: number = readlineSync.question ("Introduce la edad: ")
let weigth: number = readlineSync.question ("Introduce el peso: ")
let height: number = readlineSync.question ("Introduce la altura: ")
let isRetired: boolean = readlineSync.question ("¿Está retirado? ")
let nationality: string = readlineSync.question ("Dime la nacionalidad > ")
let oscarsNumber: number = readlineSync.question ("¿Cuantos Oscars tiene? ")
let profession: string = readlineSync.question ("Dime la profesion: ")

let profesional1 = new Professional (name, age, weigth, height, isRetired, nationality, oscarsNumber, profession)

imdbfinalTest.obtenerInstanciaIMDB(nombreArchivo);

if(imdbfinalTest.movies.length > 0) {
    let primeraPelicula = imdbfinalTest.movies[0];
    if(!primeraPelicula.actors) {
      primeraPelicula.actors = [];
    }
    primeraPelicula.actors.push(profesional1);
}
imdbfinalTest.escribirEnFicheroJSON(nombreArchivo); 