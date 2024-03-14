import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './SignIn.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,MatGridListModule
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
