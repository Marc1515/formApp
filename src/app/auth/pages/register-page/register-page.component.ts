import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* import * as customValidators from 'src/app/shared/validators/validators'; */

import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {


/* customValidators */

/*   public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern) ]],
    email: ['', [ Validators.required, Validators.pattern(customValidators.emailPattern) ]],
    username: ['', [ Validators.required, customValidators.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  }) */


/* ValidatorsService */

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern) ]],
    email: ['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern) ]],
    username: ['', [ Validators.required, this.validatorsService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  })


  constructor( private fb: FormBuilder,
               private validatorsService: ValidatorsService
  ) {}

  isValidField( field: string ) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
    }
    console.log(this.myForm.value)
  }

}
