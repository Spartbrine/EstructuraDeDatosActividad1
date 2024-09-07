import { Component } from '@angular/core';
import { FiguraComponent } from '../figura/figura.component';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms'
@Component({
  selector: 'app-cuadrado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cuadrado.component.html',
  styleUrl: './cuadrado.component.scss'
})
export class CuadradoComponent extends FiguraComponent {
  protected lado: number
  area = 0;
  perimetro = 0;
  constructor() {
    super();
    this.lado = 0;
  }

  calcularArea(): number {
      return this.lado * this.lado;
  }

  calcularPerimetro(): number {
      return 4 * this.lado;
  }

  calcular() {
    if (this.lado !== undefined) {
      this.area = this.calcularArea();
      this.perimetro = this.calcularPerimetro();
    }
  }


}

