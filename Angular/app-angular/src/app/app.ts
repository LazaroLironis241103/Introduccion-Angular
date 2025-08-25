import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from './nuevo-componente/nuevo-componente';
import { ComponenteEnLineaComponent } from './componente-en-linea/componente-en-linea.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoComponente, ComponenteEnLineaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly titulo = 'Hola Mundo desde Angular';
}
