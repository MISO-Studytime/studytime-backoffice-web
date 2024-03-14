import { Routes } from '@angular/router';
import { SignInComponent } from './SignIn/SignIn.component';
import { RecoveryPasswordComponent } from './RecoveryPassword/RecoveryPassword.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';

export const routes: Routes = [
    { path: '', component: SignInComponent, pathMatch: 'full' },
    { path: 'recovery-pass', component: RecoveryPasswordComponent, pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
];

