import { Movie } from "./movie";
import * as fs from 'fs';

export class Imdb {


  public movies: Movie[];

  constructor(movies: Movie[]) {

    this.movies = movies;
  }

  public toString():string {

    return JSON.stringify(this.movies);
  }
  public escribirEnFicheroJSON(nombreFichero: string): void{
    fs.writeFileSync(nombreFichero, this.toString(), 'utf-8');
  }
  public obtenerInstanciaIMDB(nombreFichero: string): Imdb{
    let lecturaJson = fs.readFileSync(nombreFichero, 'utf-8');
    let lecturaImdb = JSON.parse(lecturaJson);
    return new Imdb(lecturaImdb.movies);
  }
}