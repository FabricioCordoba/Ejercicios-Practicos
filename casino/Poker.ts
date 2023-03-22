import {CasinoGames} from "./JuegoCasino"


export class Poker extends CasinoGames{
    numTable: number;
    dealer: string;
    
    constructor(name: string, hall: string, maxBet: number, minBet: number, jackpot: number, maxParticipants: number,  minParticipants: number, numTable: number, dealer: string){
        super(name, hall,maxBet,minBet, jackpot,maxParticipants, minParticipants)
        this.numTable= numTable;
        this.dealer= dealer;
    }
}