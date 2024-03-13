import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css'],
  standalone:true,
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatGridListModule,MatButtonModule,MatToolbarModule,MatButtonModule
   ]
})
export class DashboardComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSignIn(){
    this.router.navigate(['/sign-in']);
  }

}
