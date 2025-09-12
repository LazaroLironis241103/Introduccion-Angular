import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.html',
  styleUrl: './ejemplo-pipes.css'
})
export class EjemploPipes {
  empleados = [
  { nombre: 'Lazaro Lironis', sueldo: 5500, fechaNacimiento: new Date(2003, 10, 24) },
  { nombre: 'Ana Perez', sueldo: 2500, fechaNacimiento: new Date(1990-11-5) },
  { nombre: 'Juan Martinez', sueldo: 3500, fechaNacimiento: new Date(1985-2-3) },
]
}
