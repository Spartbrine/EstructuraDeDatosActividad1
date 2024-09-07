import { Component } from '@angular/core';
import { FiguraComponent } from '../figura/figura.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './circulo.component.html',
  styleUrl: './circulo.component.scss'
})
export class CirculoComponent extends FiguraComponent {
  radio: number | undefined;
  area = 0;
  perimetro = 0;

  calcularArea(): number {
    return this.radio !== undefined ? Math.PI * Math.pow(this.radio, 2) : 0;
  }

  calcularPerimetro(): number {
    return this.radio !== undefined ? 2 * Math.PI * this.radio : 0;
  }

  calcular() {
    if (this.radio !== undefined) {
      this.area = this.calcularArea();
      this.perimetro = this.calcularPerimetro();
    }
  }
}

