import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente';
import { ComponenteEnLineaComponent } from './componente-en-linea/componente-en-linea.component';
import { Padre } from "./padre/padre";
import { Hijo } from "./hijo/hijo";
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";
import { ComponenteIf } from "./componente-if/componente-if";
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";
import { ComponenteFor } from "./componente-for/componente-for";
import {  ViewChildComponent } from "./view-child/view-child";
import { Mensaje } from './mensaje';
import { ListadoUsuarios } from "./listado-usuarios/listado-usuarios";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteEnLineaComponent, Padre, Hijo, MostrarMensaje, Replicador, Saludar, ComponenteIf, AgregarTarea, ComponenteFor, ViewChildComponent, ListadoUsuarios],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  titulo = 'Servicios y Observables en Angular';

  mensaje: string | undefined;

  constructor(mensaje: Mensaje) {
    this.mensaje = mensaje.obtenerMensaje();
  }
}
