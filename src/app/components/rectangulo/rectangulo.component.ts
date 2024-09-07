import { Component } from '@angular/core';
import { FiguraComponent } from '../figura/figura.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rectangulo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rectangulo.component.html',
  styleUrl: './rectangulo.component.scss'
})
export class RectanguloComponent extends FiguraComponent {
  ancho: number | undefined;
  alto: number | undefined;
  area = 0;
  perimetro = 0;

  constructor(){
    super();
  }

  calcularArea(): number {
    return this.ancho !== undefined && this.alto !== undefined ? this.ancho * this.alto : 0;
  }

  calcularPerimetro(): number {
    return this.ancho !== undefined && this.alto !== undefined ? 2 * (this.ancho + this.alto) : 0;
  }

  calcular() {
    if (this.ancho !== undefined && this.alto !== undefined) {
      this.area = this.calcularArea();
      this.perimetro = this.calcularPerimetro();
    }
  }
}

