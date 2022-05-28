import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';

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
    private jobService: JobService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formGroup.value);
    console.log('valid', this.formGroup.valid);
    if (this.formGroup.valid) {
      this.jobService.setUsername(this.formGroup.value.username);
      this.router.navigate(['/jobs']);
    }
  }
}
