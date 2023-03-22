import { Engine } from "./Engine"
import { Eficiencia } from "./Engine";

enum FuelType{
    a,b
}

export class FuelEngine extends Engine{
    cylinders: number;
    fuelType: FuelType;

    constructor(id:string, description:string, manufacturinDate: Date,  intslationDate:Date, powerHp:number, efficiency: Eficiencia, maker:string, cylinders:number, fuelType:FuelType){
        super(id, description, manufacturinDate,  intslationDate, powerHp, efficiency, maker);

        this.cylinders=cylinders;
        this.fuelType= fuelType;
    }
}