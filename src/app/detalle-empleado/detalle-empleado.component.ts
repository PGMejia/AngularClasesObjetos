import { Component } from '@angular/core';
import { Empleado } from 'src/entity/empleado';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent {
  empleado1:Empleado = new Empleado("Byron", 29, 3500000, "Ingeniero Desarrollo 2");
  empleado2:Empleado = new Empleado("Diego", 24, 900000, "Ingeniero de Sistemas");


}
