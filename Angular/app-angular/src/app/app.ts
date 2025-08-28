import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente';
import { ComponenteEnLineaComponent } from './componente-en-linea/componente-en-linea.component';
import { Padre } from "./padre/padre";
import { Hijo } from "./hijo/hijo";
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteEnLineaComponent, Padre, Hijo, MostrarMensaje, Replicador, Saludar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly titulo = 'Two-ay Binding';
}
