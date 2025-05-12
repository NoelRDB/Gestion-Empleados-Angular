import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../empleado.model';

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

}
