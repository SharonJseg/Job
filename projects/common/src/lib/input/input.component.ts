import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'job-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  formControl = new FormControl();

  error = {
    email: 'Please enter a valid email address',
    required: 'Value is required',
    minLength: 'min length is',
  };

  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() inputName!: string;
  @Input() validators: ValidatorFn[] = [];
  onChange = (value: any) => {};

  constructor() {}

  ngOnInit(): void {
    this.setValidators();
    this.registerFormChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(obj: any): void {
    this.formControl.setValue(obj);
  }

  private registerFormChanges() {
    this.formControl.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((value) => {
        this.onChange(value);
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  private setValidators() {
    if (this.validators?.length) {
      this.formControl.setValidators(this.validators);
    }
  }
}
