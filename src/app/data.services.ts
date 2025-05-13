import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{

     constructor(private httpClient: HttpClient)
     {

     } 

     cargarEmpleados()
     {
        return this.httpClient.get('https://mis-clientes-6ac0f-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
     }

     guardarEmpleados(empleados: Empleado[])
     {
        this.httpClient.put('https://mis-clientes-6ac0f-default-rtdb.europe-west1.firebasedatabase.app/datos.json',empleados).subscribe(
            response=> console.log("Se han guardado los empleados: "+ response),

            error=> console.log("Error al guardar"+ error)
        );
     }

     actualizarEmpleados(indice: number, empleado: Empleado)
     {
        let url = 'https://mis-clientes-6ac0f-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        this.httpClient.put(url,empleado).subscribe(
            response=> console.log("Se ha modificado correctamente el empleado:" + response),

            error=> console.log("Error al modificar el empleado" + error)
        )
     }

     eliminarEmpleado(indice: number)
     {
        let url = 'https://mis-clientes-6ac0f-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado correctamente"),

            error => console.log("Error:" + error)
        );

     }

}