import {
	Component,
	OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { MatSelectModule } from '@angular/material/select';

import {
	MatDialog,
	MAT_DIALOG_DATA,
	MatDialogTitle,
	MatDialogContent,MatDialogActions,MatDialogClose
  } from '@angular/material/dialog';

@Component({
  selector: 'app-AdminUsers',
  templateUrl: './AdminUsers.component.html',
  styleUrls: ['./AdminUsers.component.css'],
  standalone: true,
	imports: [
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		MatGridListModule,
		MatButtonModule,
		MatToolbarModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		DatePipe,
		MatSort,
		MatPaginator,
		MatCardModule,
		CommonModule,
		MatListModule,
		MatIconModule,
		MatSelectModule
	],
})
export class AdminUsersComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit() {
  }

  goToSignIn() {
		this.router.navigate(['/sign-in']);
	}

  goToDashboard() {
		this.router.navigate(['/dashboard']);
	}

	openDialog() {
		this.dialog.open(DialogConfirm,{
			width: '280px'
		});
		}

}



@Component({
	selector: 'dialog-confirm-dialog',
	templateUrl: 'dialog-confirm-dialog.html',
	standalone: true,
	imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  })
  export class DialogConfirm {
	constructor(private router: Router,public dialog: MatDialog) { }
	goToDashboard(){
	  this.router.navigate(['/dashboard']);
	}
  }