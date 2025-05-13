import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

@Injectable()
export class EmpleadosService
{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataServices)
    {
      console.log('%c[EmpleadosService] constructor', 'color: green; font-weight: bold;', this);
    this.dataService.cargarEmpleados()
    }

    setEmpleados(empleaditos: Empleado[])
    {
      this.listaEmpleados = empleaditos;
    }

    obtenerEmpleados()
    {
      console.log('%c[EmpleadosService] obtenerEmpleados →', 'color: green;', this.listaEmpleados);
      return this.dataService.cargarEmpleados();
    }


    listaEmpleados: Empleado[] = [];


      agregarEmpleadoServicio(empleado: Empleado)
      {
        console.log('%c[EmpleadosService] antes de push', 'color: green;', this.listaEmpleados);
        this.servicioVentanaEmergente.muestraMensaje(
            "Empleado añadido: " + "\n"
            + "Nombre: " + empleado.nombre + "\n"
            + "Apellido: " + empleado.apellido + "\n"
            + "Cargo: " + empleado.cargo + "\n"
            + "Salario: " + empleado.salario); 
        this.listaEmpleados.push(empleado);
        console.log('%c[EmpleadosService] después de push', 'color: green;', this.listaEmpleados);
        this.dataService.guardarEmpleados(this.listaEmpleados);
      }

      encontrarEmpleado(indice: number)
      {
        let empleado: Empleado = this.listaEmpleados[indice];
        return empleado;
      }  

      actualizarEmpleado(indice: number, empleado: Empleado)
      {
        this.listaEmpleados[indice].nombre = empleado.nombre;
        this.listaEmpleados[indice].apellido = empleado.apellido;
        this.listaEmpleados[indice].cargo = empleado.cargo;
        this.listaEmpleados[indice].salario = empleado.salario;

        this.servicioVentanaEmergente.muestraMensaje(
            "Empleado actualizado: " + "\n"
            + "Nombre: " + empleado.nombre + "\n"
            + "Apellido: " + empleado.apellido + "\n"
            + "Cargo: " + empleado.cargo + "\n"
            + "Salario: " + empleado.salario);

            this.dataService.guardarEmpleados(this.listaEmpleados);
      }

      eliminarEmpleado(indice: number)
      {
        this.listaEmpleados.splice(indice,1); // Así no me elimina dos de golpe
      
        this.dataService.eliminarEmpleado(indice);

        this.dataService.guardarEmpleados(this.listaEmpleados);

        this.servicioVentanaEmergente.muestraMensaje("El Empleado ha sido eliminado con exito: ");
      }
}