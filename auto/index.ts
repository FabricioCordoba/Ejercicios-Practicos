import { Auto } from "./auto";
import RegistroAuto from "./registroAuto";

let vendedor = new RegistroAuto();

let suran= new Auto("Suran", "Renault", 2016, "Rojo", "Sedan", 59004);

//let corolla= new Auto("Corolla", "Toyota", 2011, "Gris", "Sedan", 202456);
//vendedor.consultar() //CONSULTA LISTADO DE AUTOS
vendedor.consultarAuto("Clio"); //CONSULTA POR UN AUTO ESPECIFICO
//vendedor.darAlta(corolla); // agrega un nuevo auto
//vendedor.darAlta(suran); // agrega un nuevo auto
//vendedor.darBaja("Corolla"); //Elimina un vehiculo y devuelve el listado modificado
//console.log(listaVehiculos);
