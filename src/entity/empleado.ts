import { Persona } from "./persona";

export class Empleado extends Persona {

  salario!:number;
  cargo!: String;


  constructor(nombre:String, edad:number, salario:number, cargo:String){

    super(nombre, edad);

    this.salario=salario;
    this.cargo = cargo;
  }

}
