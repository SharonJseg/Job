import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.scss'],
})
export class JobCreateComponent implements OnInit {
  inputValidators = [Validators.required];

  formGroup: FormGroup = this.formBuilder.group({
    company: [undefined, this.inputValidators],
    position: [undefined, this.inputValidators],
    location: [undefined, this.inputValidators],
    website: [undefined, this.inputValidators],
    description: [undefined],
    requirements: [undefined],
    role: [undefined],
  });

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.jobService.addJob(
      this.formGroup.value,
      this.formGroup.value.requirements,
      this.formGroup.value.role
    )
    .subscribe();
    this.router.navigate(['/jobs'])

  }
}
