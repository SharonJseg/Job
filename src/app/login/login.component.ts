import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';
import { map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  passwordValidators = [Validators.required, Validators.minLength(2)];
  usernameValidators = [Validators.required];

  formGroup: FormGroup = this.formBuilder.group({
    username: [undefined, this.usernameValidators],
    password: [undefined, this.passwordValidators],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private jobService: JobService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.logOut()
  }

  onSubmit() {
    // console.log(this.formGroup.value);
    // console.log('valid', this.formGroup.valid);
    if (this.formGroup.valid) {
      localStorage.setItem('username', this.formGroup.value.username);
      this.authService.setUser(
        this.formGroup.value.username,
        this.formGroup.value.password
      );
      this.router.navigate(['/jobs']);
    }
  }
}
