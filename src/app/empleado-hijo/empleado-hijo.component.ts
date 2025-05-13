import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../empleado.model';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo',
  standalone: false,
  templateUrl: './empleado-hijo.component.html',
  styleUrl: './empleado-hijo.component.scss'
})
export class EmpleadoHijoComponent {

  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  arrayCaracteristicas = [""];

  agregarCaracteristica(nuevaCar: string) {
    this.arrayCaracteristicas.push(nuevaCar);
  }

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
