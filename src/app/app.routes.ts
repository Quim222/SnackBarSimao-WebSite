import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', title: 'Snack Bar Simão | Café e comida caseira', loadComponent: () => import('./pages/home').then(m => m.Home) },
  { path: 'ementa', title: 'Ementa | Snack Bar Simão', loadComponent: () => import('./pages/menu').then(m => m.Menu) },
  { path: '**', redirectTo: '' },
];
