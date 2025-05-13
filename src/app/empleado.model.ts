export class Empleado{

    nombre: string="";
    apellido:string="";
    cargo:string="";
    salario:number=0;


    constructor(miNombre:string, miApellido:string, miCargo:string, miSalario:number){
        this.nombre=miNombre;
        this.apellido=miApellido;
        this.cargo=miCargo;
        this.salario=miSalario;
    }
}