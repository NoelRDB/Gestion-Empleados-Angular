import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  standalone: false,
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.scss'
})
export class ActualizaComponentComponent {


  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private miServicio: ServicioEmpleadosService, 
    private empleadosServide: EmpleadosService
  ) 
  { 
    this.empleados = this.empleadosServide.listaEmpleados;
    this.indice = this.route.snapshot.params['id'];
  
    let empleado:Empleado = this.empleadosServide.encontrarEmpleado(this.indice);

    this.cuadroNombre= empleado.nombre;
    this.cuadroApellido= empleado.apellido;
    this.cuadroCargo= empleado.cargo;
    this.cuadroSalario= empleado.salario;

  }

  empleados: Empleado[] = [];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  indice:number;

  volverHome(){

    this.router.navigate([''])
  }

    actualizaEmpleado()
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
      this.empleadosServide.actualizarEmpleado(this.indice,nuevoEmpleado);
      this.volverHome()
      }
    }

}
