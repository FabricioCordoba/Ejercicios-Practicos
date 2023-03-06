import { Auto } from "./auto";
const fs = require("fs");
let listaVehiculos: any[] = [];

export class RegistroAuto {
  //consultar listado.

  consultar() {
    //NO TOCAR MAS-- MUESTRA LISTADO COMPLETO DE VEHICULOS.

    const data = fs.readFileSync("./listadoAuto.json", "utf8");
    const vehiculos = JSON.parse(data);
    for (let i = 0; i < vehiculos.length; i++) {
      listaVehiculos.push(vehiculos[i]);
    }
    console.log(listaVehiculos);
  }

  darAlta(auto: Auto, listaVehiculos: Auto[]) {
    //NO TOCAR--AGREGA NUEVO AUTO AL LISTADO
    if (listaVehiculos.push(auto)) {
      console.log("Se incorporo vehiculo ", auto.modelo, " para la venta");
      this.consultar()
    } else {
      console.log("el auto ", auto.modelo, " no se pudo incorporar");
    }
  }

  darBaja(nombre:string, listaVehiculos: Auto[]): any{
    let autoBaja = listaVehiculos.findIndex(auto => auto.modelo === nombre);

    console.log(autoBaja);
    
    /*if(autoBaja>=0){
        listaVehiculos.splice(autoBaja, 1);
        console.log("El auto ", autoBaja, "se dio de baja");  
        return listaVehiculos;     
    }else {
        console.log("El auto ", autoBaja, " no pudo darse de baja porque debe patentes" );
        
    }
    */
  }

  consultarAuto(modelo: string, listaVehiculos: Auto[]){
    let autoEncontrado = listaVehiculos.find(auto => auto.modelo === modelo);
    console.log(autoEncontrado)
    if(autoEncontrado){
        console.log(modelo, ' Esta disponible ', autoEncontrado)
        return autoEncontrado
    } else{
        console.log(modelo, ' No esta disponible');
        
    }
}
}
let suran = new Auto("Suran", "Renault", 2016, "Rojo", "Sedan", 59004);
let vendedor = new RegistroAuto();

//vendedor.consultar() //CONSULTA LISTADO DE AUTOS
vendedor.consultarAuto("Clio", listaVehiculos)
//vendedor.darAlta(suran, listaVehiculos);
//vendedor.consultar();
//vendedor.darBaja("Clio", listaVehiculos);
