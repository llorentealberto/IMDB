
export class Professional {
    public name: string
    public age: number
    public weight: number
    public height: number
    public isRetired: boolean
    public nationality: string
    public oscarsNumber: number
    public profession: string
    constructor(name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    public printAll() {
        return `
        Name - ${this.name}
        Age - ${this.age}
        Weight - ${this.weight}
        Height - ${this.height}
        IsRetired - ${this.isRetired}
        Nationality - ${this.nationality}
        OscarsNumber - ${this.oscarsNumber}
        Profession - ${this.profession}  `
    }
};

