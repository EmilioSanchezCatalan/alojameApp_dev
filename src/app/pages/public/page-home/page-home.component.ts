/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: page detail of one home
 */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatSnackBar} from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { LoginComponent } from '../../../components/login/login.component';
import { RegisterComponent } from '../../../components/register/register.component';
import { HomesFull } from '../../../interfaces/homes';
import { HomePublicService } from '../../../services/home-public.service';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  public popupLogin: MatDialogRef<LoginComponent>;
  public popupRegister: MatDialogRef<RegisterComponent>;
  public homes_id: number;
  public homeInfo: HomesFull;
  public displaySpinner: boolean;
  public isErrorLoading: boolean;

  constructor(
    private __dialog: MatDialog,
    private __snackBar: MatSnackBar,
    private __activeRoute: ActivatedRoute,
    private __homePublic: HomePublicService
  ) {
    this.displaySpinner = true;
    this.__activeRoute.params.subscribe( params => this.homes_id = params.homeId );

  }

  ngOnInit() {
    this.__homePublic.getHomeFull(this.homes_id)
      .then( response => {
        this.displaySpinner = false;
        this.homeInfo = response;
      }).catch( error => {
        this.displaySpinner = false;
        this.isErrorLoading = true;
      });
  }

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
