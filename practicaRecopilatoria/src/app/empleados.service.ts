import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService
{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService)
    {

    }

    listaEmpleados: Empleado[] = [
        
        new Empleado("Noel","Roman","Programador", 1300),
        new Empleado("Luis","José","Limpiado", 1200),
        new Empleado("Juan","Pedro","Jefe de Equipo", 2300),
        new Empleado("Miguel","Castañé","Director", 4500),
      ];

      agregarEmpleadoServicio(empleado: Empleado)
      {
        this.servicioVentanaEmergente.muestraMensaje(
            "Empleado añadido: " + "\n"
            + "Nombre: " + empleado.nombre + "\n"
            + "Apellido: " + empleado.apellido + "\n"
            + "Cargo: " + empleado.cargo + "\n"
            + "Salario: " + empleado.salario); 
        this.listaEmpleados.push(empleado);
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
      }
}