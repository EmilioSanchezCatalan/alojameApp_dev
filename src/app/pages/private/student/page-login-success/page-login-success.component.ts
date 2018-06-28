import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthStudentService } from '../../../../services/auth-student.service';

@Component({
  selector: 'page-login-success',
  templateUrl: './page-login-success.component.html',
  styleUrls: ['./page-login-success.component.css'],
  providers: [AuthStudentService]
})
export class PageLoginSuccessComponent {

  constructor(
    private __authStudent: AuthStudentService,
    private __activeRoute: ActivatedRoute,

  ) {
    let token: string;
    this.__activeRoute.queryParams.subscribe(response => token = response.authToken);
    this.__authStudent.setAuth(token);
  }

}
