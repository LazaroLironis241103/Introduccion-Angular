import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css'
})
export class Interpolacion {
  titulo = 'Universidad Angular';
  usuario = {
    nombre: "Guido Carrillo",
    edad: 34
  };

  saludar() {
    return `Hola, ${this.usuario.nombre}`;
  }
}
