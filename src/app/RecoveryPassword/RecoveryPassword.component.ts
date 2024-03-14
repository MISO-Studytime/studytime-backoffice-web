import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,MatDialogActions,MatDialogClose
} from '@angular/material/dialog';


@Component({
  selector: 'app-RecoveryPassword',
  templateUrl: './RecoveryPassword.component.html',
  styleUrls: ['./RecoveryPassword.component.css'],
  standalone:true,
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatGridListModule,MatButtonModule
   ]
})
export class RecoveryPasswordComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit() {
  }

  goToSignIn(){
    this.router.navigate(['/sign-in']);
  }

  openDialog() {
    this.dialog.open(DialogConfirmRecovery,{
      width: '280px'
    });
  }

}


@Component({
  selector: 'dialog-confirm-recovery-dialog',
  templateUrl: 'dialog-confirm-recovery-dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogConfirmRecovery {
  constructor(private router: Router,public dialog: MatDialog) { }
  goToSignIn(){
    this.router.navigate(['/sign-in']);
  }
}