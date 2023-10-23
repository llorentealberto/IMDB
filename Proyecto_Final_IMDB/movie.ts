import {Professional} from "./professional"
export class Movie{
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public lenguage: string;
    public plataform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;
    
    constructor(title: string, releaseYear: number, nacionality: string, genre: string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors;
        this.nacionality = nacionality;
        this.director;
        this.writer;
        this.lenguage;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genre;
    }
    showDataMovies(){
        return `
        Characteristics from ${this.title}:
        Release year - ${this.releaseYear}
        Actors - ${this.actors},
        Nacionality - ${this.nacionality}
        Director - ${this.director}
        Writer - ${this.writer},
        Lenguage - ${this.lenguage},
        Plataform - ${this.plataform},
        MCU - ${this.isMCU},
        Character name - ${this.mainCharacterName},
        Producer - ${this.producer},
        Distributor - ${this.distributor},
        Genre - ${this.genre}`
    }
}