import { Routes } from '@angular/router';
import { SignInComponent } from './SignIn/SignIn.component';

export const routes: Routes = [
    { path: '', component: SignInComponent, pathMatch: 'full' },
];

