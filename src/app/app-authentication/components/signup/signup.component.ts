import { Component, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { SignUpModel } from '../../models/signup.model';
import { filter, map } from 'rxjs/operators';
import { CoreService } from '@core/core.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':enter', [
        style({ transform: 'translateX(350px)', opacity: 0 }),
        animate(
          '1s ease-out',
          style({ transform: 'translateX(0%)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signUpModel: SignUpModel;

  errorObserver = {
    firstname: null,
    lastname: null,
    email: null,
  };

  constructor (
    private formBuilder: FormBuilder,
    private coreService: CoreService,
    private authService: AuthService,
    private validationService: ValidationService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.createForm();
    this.coreService.handleFormError(
      this.signUpForm,
      this.errorObserver,
      this.generateErrors
    );
    this.signUpForm.controls['confirmPassword'].disable();
  }

  generateErrors(name: string, owner: string) {
    switch (owner) {
      case 'firstname':
        if (name == 'required') {
          return 'First name is required';
        } else {
          return 'Invalid name';
        }
      case 'lastname':
        if (name == 'required') {
          return 'Last name is required';
        } else {
          return 'Invalid name';
        }
      case 'email':
        if (name == 'required') {
          return 'Email is required';
        } else if (name == 'isExists') {
          return 'Already has an account with this email';
        } else {
          return 'Invalid email';
        }
    }
  }

  createForm() {
    return this.formBuilder.group(
      {
        firstname: [
          '',
          Validators.compose([Validators.minLength(3), Validators.required]),
        ],
        lastname: [
          '',
          Validators.compose([Validators.minLength(3), Validators.required]),
        ],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
          this.validateEmail.bind(this),
        ],
      },
    );
  }

  validateEmail({
    value,
  }: AbstractControl): Observable<ValidationErrors | null> {
    return this.validationService.isEmailExists(value);
  }


  onSubmit() {
    if (!this.signUpForm.valid) {
      console.log('invalid');
      this.coreService.checkFormState(this.signUpForm);
      return;
    }
    const result = Object.assign({}, this.signUpForm.value);
    this.signUpModel = result;
    this.signUpModel.passwordHash = result.password;
    console.log(this.signUpModel);

    this.authService.signUp(this.signUpModel).subscribe((res) => {
      console.log(res);
    });
  }
}
