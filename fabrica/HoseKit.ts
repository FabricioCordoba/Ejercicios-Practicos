import { Equipament } from "./Equipament";

enum  MaterialThread{
    a, b, c, d, e
}

class HoseKit extends Equipament{
    items: number;
    measurementsInches: number; //medidas pulgadas
    materialThread:  MaterialThread;

    constructor(items: number, measurementsInches: number, materialThread:  MaterialThread, id:string, description:string, manufacturinDate: Date, untalationDate: Date, intslationDate:Date ){
        super(id, description, manufacturinDate,  intslationDate);
        this.items= items;
        this.measurementsInches= measurementsInches;
        this.materialThread= materialThread;
    }
}