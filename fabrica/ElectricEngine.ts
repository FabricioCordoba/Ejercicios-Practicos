import { Engine } from "./Engine"
import { Eficiencia } from "./Engine";

export class ElectricEngine extends Engine{
    voltage: string;
    consumptionKwH: number; 
    lowConsumtieon: boolean;

    constructor(id:string, description:string, manufacturinDate: Date,  intslationDate:Date, powerHp:number, efficiency: Eficiencia, maker:string, voltage: string, consumptionKwH: number, lowConsumtieon: boolean){
        super(id, description, manufacturinDate,  intslationDate, powerHp, efficiency, maker)
        this.voltage= voltage;
        this.consumptionKwH= consumptionKwH;
        this.lowConsumtieon= lowConsumtieon;
    }
}