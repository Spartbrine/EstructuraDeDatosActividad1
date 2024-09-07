import { Component } from '@angular/core';
import { FiguraComponent } from '../figura/figura.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './triangulo.component.html',
  styleUrl: './triangulo.component.scss'
})
export class TrianguloComponent extends FiguraComponent {
  lado1: number | undefined;
  lado2: number | undefined;
  lado3: number | undefined;
  area = 0;
  perimetro = 0;

  private calcularSemiperimetro(): number {
    return (this.lado1! + this.lado2! + this.lado3!) / 2;
  }

  calcularArea(): number {
    if (this.lado1 !== undefined && this.lado2 !== undefined && this.lado3 !== undefined) {
      const s = this.calcularSemiperimetro();
      return Math.sqrt(s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3));
    }
    return 0;
  }

  calcularPerimetro(): number {
    return this.lado1 !== undefined && this.lado2 !== undefined && this.lado3 !== undefined
      ? this.lado1 + this.lado2 + this.lado3
      : 0;
  }

  calcular() {
    if (this.lado1 !== undefined && this.lado2 !== undefined && this.lado3 !== undefined) {
      this.area = this.calcularArea();
      this.perimetro = this.calcularPerimetro();
    }
  }
}
