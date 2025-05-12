import { Component, EventEmitter, Output} from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  standalone: false,
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrl: './caracteristicas-empleado.component.scss'
})
export class CaracteristicasEmpleadoComponent {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadosService)
  {

  }

  agregarCaracteristicas(car: string){
    this.miServicio
    this.caracteristicasEmpleado.emit(car);
  }

}
