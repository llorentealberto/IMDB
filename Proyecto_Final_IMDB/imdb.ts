import { Movie } from "./movie";

export class Imdb {


    public movies: Movie[];

  constructor(movies: Movie[]) {

    this.movies = movies;
  }

  public toString():string {

    return JSON.stringify(this);
  }

  


}