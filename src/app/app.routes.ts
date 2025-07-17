import { Routes } from '@angular/router';
import SecondRoute from './second-route';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./first-route'),
  },
  {
    path: 'second-route',
    loadComponent: () => import('./second-route'),
  },
];
