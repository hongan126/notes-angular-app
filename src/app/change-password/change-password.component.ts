import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";
import {User} from "../_models/user";
import {UserService} from "../_services/user.service";
import {Router} from "@angular/router";
import {AlertService} from "../_services/alert.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChangePasswordComponent implements OnInit {
  fgChangePass: FormGroup;

  hide1 = true;
  hide2 = true;
  hide3 = true;

  currentUser: User;
  newpass: string;
  currentpass: string;
  confirmNewPass: string;

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService, private fb: FormBuilder) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.fgChangePass = this.fb.group({
      currentPass: ['', [Validators.required]],
      newPass: ['', [Validators.required]],
      confirmPass: [this.newpass, [Validators.required, Validators.pattern(this.newpass)]]
    });
  }

  changePass(): void {
    this.currentUser.password = this.currentpass;
    this.userService.checkPass(this.currentUser).subscribe(
      data => {
        this.currentUser.password = this.newpass;
        this.userService.update(this.currentUser)
          .subscribe(
            data => {
              this.alertService.success('Change pass successful', true);
              this.router.navigate(['/']);
            },
            error => {
              this.alertService.error(error);
            });
      },
      error => {
        this.alertService.error(error);
        return;
      });

  }
}
