import { Persona } from "./persona";

export class Empleado extends Persona {

  constructor(nombre:string, edad:number, salario:number, cargo:string){
    super(nombre, edad);

  }
}
