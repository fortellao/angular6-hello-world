import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangePasswordValidators } from './change-password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', [
        Validators.minLength(3),
        Validators.required],
        ChangePasswordValidators.oldPasswordMustMatch],
      newPassword: ['', [
        Validators.minLength(3),
        Validators.required
      ]
    ],
      repeatPassword: []
    },
    {validator: ChangePasswordValidators.passwordsMustMatch})
  }

  get oldPassword() {
    return this.form.get('oldPassword') as FormControl
  }

  get newPassword() {
    return this.form.get('newPassword') as FormControl
  }

  get repeatPassword() {
    return this.form.get('repeatPassword') as FormControl
  }
}
