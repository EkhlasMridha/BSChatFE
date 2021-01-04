import { Routes } from '@angular/router';
import { AuthGuardService } from '../shared-services/route-guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app-dashboard/app-dashboard.module').then(
        (module) => module.AppDashboardModule
      ),
    data: {
      breadCrumb: 'Dashboard',
    },
    canActivateChild: [AuthGuardService],
  },
];

export function getBusinessRoutes() {
  return routes;
}
