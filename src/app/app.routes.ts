import { Routes } from '@angular/router';
import { SignInComponent } from './SignIn/SignIn.component';
import { RecoveryPasswordComponent } from './RecoveryPassword/RecoveryPassword.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { AdminUsersComponent } from './AdminUsers/AdminUsers.component';

export const routes: Routes = [
    { path: '', component: SignInComponent, pathMatch: 'full' },
    { path: 'recovery-pass', component: RecoveryPasswordComponent, pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
	{path: 'stats', component: StatsComponent, pathMatch: 'full'},
    { path: 'admin-users', component: AdminUsersComponent, pathMatch: 'full' },
];

