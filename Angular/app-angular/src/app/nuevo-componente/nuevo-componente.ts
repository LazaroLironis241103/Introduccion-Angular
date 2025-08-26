import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  standalone: true,
  templateUrl: './nuevo-componente.html',
  styleUrls: ['./nuevo-componente.css']
})
export class NuevoComponenteComponent {   // <-- renombrar aquí
  tituloNuevoComponente = "Nuevo Componente";
}
