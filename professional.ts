export class Professional{
    constructor(public name:string, public age:number, public weight:number, public height:number, public isRetired:boolean, public nationality: string, public oscarsNumber:number, public profession:string){
        this.name = name
        this.age = age
        this.weight = weight
        this.height = height
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarsNumber = oscarsNumber
        this.profession = profession
    }
    public toString():void{
        console.log(this);
    }
}