import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./feature/feat-dashboard.view.component').then((c) => c.DashboardViewComponent),
  }
];
