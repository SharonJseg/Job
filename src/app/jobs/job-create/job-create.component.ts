import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.scss']
})
export class JobCreateComponent implements OnInit {

  inputValidators = [Validators.required];

  formGroup: FormGroup = this.formBuilder.group({
    company: [undefined, this.inputValidators],
    position: [undefined, this.inputValidators],
    location: [undefined, this.inputValidators],
    website: [undefined, this.inputValidators],
    description: [undefined, this.inputValidators],
    requirements: [undefined, this.inputValidators],
    role: [undefined, this.inputValidators]
  });


  constructor(private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
