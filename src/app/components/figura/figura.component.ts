import { Component } from '@angular/core';

@Component({
  selector: 'app-figura',
  standalone: true,
  imports: [],
  templateUrl: './figura.component.html',
  styleUrl: './figura.component.scss'
})
export abstract class FiguraComponent {
  abstract area : number;
  abstract perimetro : number;
  abstract calcularArea(): number;

  abstract calcularPerimetro(): number;
}

