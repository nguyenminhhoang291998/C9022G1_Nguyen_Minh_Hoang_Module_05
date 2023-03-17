import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]),
    }, this.passwordValidator);

  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  checkAge(abstractControl: AbstractControl): any {
    return abstractControl.value >= 18 ? null : {invalidAge: true};
  }

  passwordValidator(formControl: FormControl) {
    return formControl.get('password').value === formControl.get('confirmPassword').value
      ? null : {mismatch: true};
  }

}
