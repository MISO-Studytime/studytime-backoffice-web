import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-SignIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.css'],
  standalone:true,
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatGridListModule,MatButtonModule
   ]
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
