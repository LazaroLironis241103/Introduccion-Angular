import { Component } from '@angular/core';
import { Interpolacion } from "../interpolacion/interpolacion";

@Component({
  selector: 'app-nuevo-componente',
  standalone: true,
  templateUrl: './nuevo-componente.html',
  styleUrls: ['./nuevo-componente.css'],
  imports: [Interpolacion]
})
export class NuevoComponenteComponent {   // <-- renombrar aquí
  tituloNuevoComponente = "Nuevo Componente";
}
