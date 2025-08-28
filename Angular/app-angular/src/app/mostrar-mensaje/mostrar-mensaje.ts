import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css'
})
export class MostrarMensaje {
mensaje: string = '';
resetearMensaje() {
  //Reiniciar el mensaje
 this.mensaje = '';
}
mostrarMensaje() {
 this.mensaje = 'Hola, has hecho click en el boton!';
}

}
