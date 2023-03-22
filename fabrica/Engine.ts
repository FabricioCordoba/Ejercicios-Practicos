import { Equipament} from "./Equipament";

export enum Eficiencia{
    a, b, c, d, f, g
}

export class Engine extends Equipament{
    
    powerHp: number;
    efficiency: Eficiencia;
    maker: string;

    constructor( id:string, description:string, manufacturinDate: Date,  intslationDate:Date, powerHp:number, efficiency: Eficiencia, maker:string){
        super(id, description, manufacturinDate,  intslationDate);
        this.powerHp= powerHp;
        this.efficiency= efficiency;
        this.maker= maker;
    }

}
