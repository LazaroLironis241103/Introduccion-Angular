import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.html',
  styleUrls: ['./view-child.css']
})
export class ViewChildComponent {
  @ViewChild('referenciaInput') inputElemento!: ElementRef;

  cambiarTexto() {
  this.inputElemento.nativeElement.value = 'Texto Cambiado';
}
}
