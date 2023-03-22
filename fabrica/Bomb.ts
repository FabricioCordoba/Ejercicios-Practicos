import { Equipament } from "./Equipament";

export class Bomb extends Equipament{
   
    public inletFlow: number;
    public outputFlow: number;
    public maker: string;

    constructor(id:string, inletFlow: number, outputFlow: number,maker: string, description:string, manufacturingDate: Date,  intslationDate:Date ){

        super( id, description, manufacturingDate, intslationDate);
        this.inletFlow= inletFlow;
        this.outputFlow= outputFlow;
        this.maker= maker;
    }
}
