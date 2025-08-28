import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
  private titulo = 'Titulo Componente Hijo'

  //Getter de TypeScript
  get mostrarTitulo() {
    return this.titulo;
  }

  getTitulo() {
    return this.titulo;
  }
}
