import { Movie } from "./movie";
let pelicula1 = new Movie("Arribal", 2016, "EEUU", "Science fiction");
let pelicula2 = new Movie("Lord of Rings", 2003, "Irland", "Fantasy");
let pelicula3 = new Movie("Harry Potter", 2002, "England", "Fantasy");
console.log(pelicula1.showDataMovies());
console.log(pelicula2.showDataMovies());
console.log(pelicula3.showDataMovies());