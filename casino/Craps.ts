import { CasinoGames } from "./JuegoCasino";

 
 export class Craps extends CasinoGames{
     cantDice: number;
     numTable: number;
     crupier: string;

     constructor(name: string, hall: string, maxBet: number, minBet: number, jackpot: number, maxParticipants: number,  minParticipants: number, cantDice: number, numTable: number, crupier: string){
        super(name, hall,maxBet,minBet, jackpot,maxParticipants, minParticipants)
        this.cantDice= cantDice;
        this.numTable=numTable;
        this.crupier=crupier;
     }

 }