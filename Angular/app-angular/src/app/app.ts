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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteEnLineaComponent, Padre, Hijo, MostrarMensaje, Replicador, Saludar, ComponenteIf, AgregarTarea, ComponenteFor],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly titulo = 'Decorador @Output en Angular';
}
