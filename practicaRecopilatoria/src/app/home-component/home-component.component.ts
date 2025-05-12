import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {
  [x: string]: any;
  titulo = 'Listado de Empleados';

  constructor(private miServicio: ServicioEmpleadosService, private empleadosServide: EmpleadosService)
  {
    this.empleados = this.empleadosServide.listaEmpleados;
  }

  empleados: Empleado[] = [];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado()
  {
    if(this.cuadroNombre == "" || this.cuadroApellido == "" || this.cuadroCargo == "" || this.cuadroSalario <= 0)
    {
      alert("Los campos no pueden estar vacíos");
      return;
    }
    else{
    let nuevoEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Empleado añadido: " + nuevoEmpleado.nombre);
    this.empleadosServide.agregarEmpleadoServicio(nuevoEmpleado);
    }
  }

}
