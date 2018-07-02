/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: page detail of one home
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog, MatSnackBar} from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { LoginComponent } from '../../../components/login/login.component';
import { RegisterComponent } from '../../../components/register/register.component';
import { HomesFull } from '../../../interfaces/homes';
import { ErrorSimpleNotificationService } from '../../../services/error-simple-notification.service';
import { HomePublicService } from '../../../services/home-public.service';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
  providers: [ErrorSimpleNotificationService]
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
    private __homePublic: HomePublicService,
    private __router: Router,
    private __errNotf: ErrorSimpleNotificationService
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
        this.__errNotf.show('No se encontraba en la sección destinada a los estudiantes, ha sido redirigido'
          + 'y ya puede proceder a enviar la solicitud');
        this.__router.navigate(['/private', 'student', 'home', this.homes_id]);
        break;
      case 'owner':
        this.__errNotf.show('Los propietarios no pueden realizar una solicitud de piso');
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
