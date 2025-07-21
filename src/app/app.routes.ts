import { Routes } from '@angular/router';
import SecondRoute from './second-route';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./first-route'),
  },
  {
    path: 'second-route',
    loadComponent: () => import('./second-route'),
  },
  {
    path: 'third-route',
    loadComponent: () => import('./third-route'),
  },
];
