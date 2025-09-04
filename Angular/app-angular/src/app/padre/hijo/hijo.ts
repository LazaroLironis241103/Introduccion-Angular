import { Component, EventEmitter, Output, /*Input*/ } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
  // !: Operador non null assertion
  // Confie en que esta propiedad sera inicializada posteriormente
  //@Input () mensaje!: string;
  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje() {
    // Emitir el evento con un mensaje ( se emite una cadena)
    this.notificarPadre.emit('Mensaje desde el componente hijo al padre');
  }
}
