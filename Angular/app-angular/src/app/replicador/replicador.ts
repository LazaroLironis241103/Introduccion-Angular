import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.html',
  styleUrl: './replicador.css'
})
export class Replicador {
texto: string = '';

actualizarTexto($event: Event) {
  const elementoInput = $event.target as HTMLInputElement;
  this.texto = elementoInput.value;
}


}
