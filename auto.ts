export class Auto {
  modelo: string;
  marca: string;
  anio: number;
  color: string;
  tipo: string;
  kilometraje: number;

  constructor(
    modelo: string,
    marca: string,
    anio: number,
    color: string,
    tipo: string,
    kilometraje: number
  ) {
    this.modelo = modelo;
    this.marca = marca;
    this.anio = anio;
    this.color = color;
    this.tipo = tipo;
    this.kilometraje = kilometraje;
  }
}
