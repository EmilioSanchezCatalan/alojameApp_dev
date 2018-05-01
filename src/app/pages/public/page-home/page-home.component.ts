/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: page detail of one home
 */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatSnackBar} from '@angular/material';

import { LoginComponent } from '../../../components/login/login.component';
import { RegisterComponent } from '../../../components/register/register.component';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {

  public popupLogin: MatDialogRef<LoginComponent>;
  public popupRegister: MatDialogRef<RegisterComponent>;

  constructor(
    private __dialog: MatDialog,
    private __snackBar: MatSnackBar
  ) { }

  public sendRequestHome(): void {
    switch (localStorage.getItem('userType')) {
      case 'student':
        break;
      case 'owner':
        this.__snackBar.open('Los propietarios no pueden realizar una solicitud de piso', 'Aceptar', {
          duration: 2500,
          verticalPosition: 'top',
          panelClass: 'error-validation'
        });
        break;
      case 'public':
        this.openLogin();
        break;
    }
  }

  /**
   * Open a popup of Register
   */
  public openRegister(): void {
    this.popupRegister = this.__dialog.open(RegisterComponent);
    this.popupRegister.afterClosed().subscribe(
      response => {
        if (response === 'login') {
          this.openLogin();
        }
      }
    );
  }

  /**
   * Open a popup of Login
   */
  public openLogin(): void {
    this.popupLogin = this.__dialog.open(LoginComponent);
    this.popupLogin.afterClosed().subscribe(
      response => {
        if (response === 'register') {
          this.openRegister();
        }
      }
    );
  }
}
