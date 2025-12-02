import { Routes } from '@angular/router';
import { authGuard} from './core/auth/auth.guard';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import {SummaryComponent} from './pages/summary/summary';
import {ReportsComponent} from './pages/reports/reports';



export const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'reports', component: ReportsComponent }
    ]
  },
  { path: '**', redirectTo: '' }

];
