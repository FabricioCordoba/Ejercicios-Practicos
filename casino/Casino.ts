import { Poker} from "./Poker";
import { Craps } from "./Craps";

export class Casino{
    name: string;
    locations: string;
    poker: Poker;
    craps: Craps;

    constructor(name: string, locations: string,poker: Poker, craps: Craps){
        this.name=name;
        this.locations= locations;
        this.poker= poker;
        this.craps= craps;
    }
}