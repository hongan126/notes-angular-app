import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../_services/user.service";
import {AlertService} from "../_services/alert.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

export function forbiddenUsername(u: AbstractControl) {
  const users = ['manager', 'admin', 'manager@gmail.com', 'admin@gmail.com'];
  if (users.includes(u.value)) {
    return {'invalid-username': true};
  }
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  fgRegister: FormGroup;
  model: any = {};

  hide = true;

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.fgRegister = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.email, forbiddenUsername]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register() {
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
        });
  }

}
