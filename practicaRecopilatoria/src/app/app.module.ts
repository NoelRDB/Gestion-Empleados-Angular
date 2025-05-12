import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesSomosComponentComponent } from './quienes-somos-component/quienes-somos-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';


const appRoutes: Routes=[

  {path:'', component: HomeComponentComponent},
  {path:'proyectos', component: ProyectosComponentComponent},
  {path:'quienes', component: QuienesSomosComponentComponent},
  {path:'contacto', component: ContactoComponentComponent},
  {path:'actualiza/:id', component: ActualizaComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesSomosComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // Referencia a la constante de rutas
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
