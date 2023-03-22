let equipaments: [] = []; // lo tiene que generar el gestor
export class Equipament {
  public id: string;
  public description: string;
  public manufacturingDate: Date;
  public instalationDate: Date;
  //public componentes: [];

  constructor(
    id: string,
    description: string,
    manufacturingDate: Date,
    intslationDate: Date
  ) {
    this.id = id;
    this.description = description;
    this.manufacturingDate = manufacturingDate;
    this.instalationDate = intslationDate;
  }

  setAddEquipament(id: Equipament, array: Equipament[]): void {
    array.push(id);
    console.log("agrega " + id);

    console.log(array);
  }

  getReadEquipment(id: string, array: Equipament[]) {
    let equipment = array.find((team) => team.id === id);
    if (equipment) {
      console.log(id, " Esta disponible ", equipment);
      return equipment;
    } else {
      console.log(id, " No esta disponible");
    }
  }
  setDeleteEquipment(id: string, array: Equipament[]) {
    let equipment = array.findIndex((equipment) => equipment.id === id);

    if (equipment >= 0) {
      array.splice(equipment, 1);
      console.log("El equipo ", id, "se dio de baja");
      console.log(array);

      return array;
    } else {
      console.log(
        "El equipo ",
        id,
        " no pudo darse de baja porque no se encontro"
      );
    }
  }
  setEditEquipment(
    equipo: Equipament,
    array: Equipament[],
    id: string,
    description: string,
    manufacturingDate: Date,
    instalationDate: Date
  ) {
    equipo.id = id;
    equipo.description = description;
    equipo.manufacturingDate = manufacturingDate;
    equipo.instalationDate = instalationDate;
    console.log(array);
  }
// funvion alternativa
  setEditEquipment1(
    id: string,
    array: Equipament[],
    description: string,
    manufacturingDate: Date,
    instalationDate: Date
  ) {
    this.getReadEquipment(id, array);
    this.id = id;
    this.description = description;
    this.manufacturingDate = manufacturingDate;
    this.instalationDate = instalationDate;
    console.log(array);
  }

  
}

let kit = new Equipament(
  "Heladera",
  "heladera ultima generacion enfria como en el polo norte ",
  new Date("2000-3-15"),
  new Date("2001-5-20")
);
let lavaropa = new Equipament(
  "Lavaropa",
  " lavaropas automatico DREAM",
  new Date("2022-12-1"),
  new Date("2023-3-1")
);
let secaropa = new Equipament(
  "Secaropa",
  " secaropas automatico DREAM",
  new Date("2021-1-1"),
  new Date("2021-4-25")
);
let cocina = new Equipament(
  "Cocina",
  " cocina 4 hornallas ESCORIAL",
  new Date("2000-5-4"),
  new Date("2003-10-10")
);

kit.setAddEquipament(kit, equipaments);
kit.setAddEquipament(lavaropa, equipaments);
kit.setAddEquipament(secaropa, equipaments);
//kit.setEditEquipment("Heladera", equipaments, "  se fundio ", new Date("2023-3-13"), new Date ("2023-3-15") );
kit.setEditEquipment(
  secaropa,
  equipaments,
  "secaropa",
  "  se prendio fuego ",
  new Date("2023-3-13"),
  new Date("2023-3-15")
);
kit.setEditEquipment(kit, equipaments, "Heladera de lujo", "nueva heladera con la mejor tecnologia ", new Date("2023-3-16"), new Date("2023-3-17") );
