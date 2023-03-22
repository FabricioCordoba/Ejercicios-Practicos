export class CasinoGames{
    name: string;
    hall: string;
    maxBet: number;
    minBet: number;
    jackpot: number;
    maxParticipants: number;
    minParticipants: number;

    constructor(name: string, hall: string, maxBet: number, minBet: number, jackpot: number, maxParticipants: number,  minParticipants: number){
    this.name=name;
     this.hall= hall;
     this.maxBet= maxBet;
     this.minBet= minBet;
     this.jackpot= jackpot;
     this.maxParticipants= maxParticipants;
     this.minParticipants= minParticipants;
    }

    setFree(participants: number){
        if (participants<= this.maxParticipants){
            console.log("Puedes Jugar")
        } else{
            console.log(" Esta Ocupado")
        }
    }
    getInfo(): CasinoGames{
        return this
    }

    getCongratulations(prize: number): any{
        if (prize=== this.jackpot){
            console.log("Has ganado el pozo Mayor ");
             
        } else{
            console.log("Vas por buen Camino");
             
        }

    }

}