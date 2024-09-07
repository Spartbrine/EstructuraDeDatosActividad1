import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path:'circulo',
    loadComponent : () => import('./components/circulo/circulo.component').then(m => m.CirculoComponent)
  },
  {
    path:'cuadrado',
    loadComponent : () => import('./components/cuadrado/cuadrado.component').then(m => m.CuadradoComponent)
  },
  {
    path:'triangulo',
    loadComponent : () => import('./components/triangulo/triangulo.component').then(m => m.TrianguloComponent)
  },
  {
    path:'rectangulo',
    loadComponent: () => import('./components/rectangulo/rectangulo.component').then(m => m.RectanguloComponent)
  }
];
