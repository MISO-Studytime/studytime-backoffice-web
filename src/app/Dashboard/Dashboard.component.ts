import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule, SortDirection} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DatePipe} from '@angular/common';
import {MatTableModule} from '@angular/material/table';




export interface UserElement {
  user: string;
  userType: string;
  email: string;
}

const ELEMENT_DATA: UserElement[] = [
  {user:'Randy',userType:'Usuario study time',email:'randy.williams@yahoo.es'},
  {user:'Jhon',userType:'Usuario study time',email:'randy.williams@yahoo.es'},
  {user:'Erika',userType:'Usuario study time',email:'randy.williams@yahoo.es'},
  {user:'Juan',userType:'Usuario study time',email:'randy.williams@yahoo.es'},
  
];

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css'],
  standalone:true,
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatGridListModule,MatButtonModule,MatToolbarModule,MatButtonModule,
    MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, DatePipe,MatSort,MatPaginator
   ]
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['user', 'userType', 'email'];
  dataSource = ELEMENT_DATA;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSignIn(){
    this.router.navigate(['/sign-in']);
  }

}
