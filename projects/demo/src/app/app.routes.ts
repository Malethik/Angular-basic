import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Inicio',
    loadComponent: () => import('./feature/home/home.component'),
  },
  {
    path: 'todo',
    title: 'Tareas',
    loadComponent: () => import('./feature/todo/todo.component'),
  },
  {
    path: 'day2',
    title: 'Angular dia 2',
    loadComponent: () => import('./feature/day2/day2.component'),
  },
  {
    path: 'day3',
    title: 'Day3',
    loadComponent: () => import('./feature/day3/day3.component'),
  },

  {
    path: 'about',
    title: 'Acerca de',
    loadComponent: () => import('./feature/about/about.component'),
  },
  {
    path: 'form',
    title: 'Form',
    loadComponent: () => import('./feature/user/user.component'),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'form' },
      {
        path: 'registerdd',
        title: 'Registro(Data Driven)',
        loadComponent: () =>
          import('./feature/user/component/dd-register/dd-register.component'),
      },
      {
        path: 'registertd',
        title: 'Registro(template Driven)',
        loadComponent: () =>
          import('./feature/user/component/td-register/td-register.component'),
      },
      { path: '**', redirectTo: 'form' },
    ],
  },
  { path: '**', redirectTo: 'home' },
];
