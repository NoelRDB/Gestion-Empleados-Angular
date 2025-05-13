import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  standalone: false,
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.scss'
})
export class ProyectosComponentComponent {

  constructor(
    private router:Router,
    private miServicio: ServicioEmpleadosService, 
    private empleadosServide: EmpleadosService
  ) 
  { 
    this.empleados = this.empleadosServide.listaEmpleados;
  }

  empleados: Empleado[] = [];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  volverHome(){

    this.router.navigate([''])
  }

    agregarEmpleado()
    {
      if(this.cuadroNombre == "" || this.cuadroApellido == "" || this.cuadroCargo == "" || this.cuadroSalario <= 0)
      {
        alert("Los campos no pueden estar vacíos");
        return;
      }
      else{
      let nuevoEmpleado = new Empleado(
        this.cuadroNombre, 
        this.cuadroApellido, 
        this.cuadroCargo, 
        this.cuadroSalario
      );
      this.empleadosServide.agregarEmpleadoServicio(nuevoEmpleado);
      }
    }

}
