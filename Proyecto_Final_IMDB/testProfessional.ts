import { Professional } from "./professional";

let imbd1 = new Professional ("Manuel", 59, 80, 180, true, "Italiano", 1, "Actor");
let imbd2 = new Professional ("Francisco", 70, 70, 175, false, "Esapañola", 1, "Actor");
let imbd3 = new Professional ("Anastasia", 32, 72, 185, true, "Venezolana", 1, "Camarera");

console.log (imbd1.printAll()); 
console.log (imbd2.printAll()); 
console.log (imbd3.printAll()); 