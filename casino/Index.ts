import { CasinoGames} from "./JuegoCasino";
import { Poker } from "./Poker";
import { Craps } from "./Craps";
import { Casino } from "./Casino";

let pokerJoker= new Poker ("Joker", "A", 10000, 1000, 1000000, 6, 2, 14, "Santiago");
let diceLuck= new  Craps ("Dados Locos", "C", 5000, 1000,500000,5,1,2,10,"Jose")

let casinoCode= new Casino("Code", "San Martin 666", pokerJoker, diceLuck);

pokerJoker.getCongratulations(1000000);

//console.log(casinoCode);
