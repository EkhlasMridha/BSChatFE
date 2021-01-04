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
import { FormService } from 'src/app/shared-services/utilities/form.service';
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
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    password: null,
    confirmPassword: null,
  };

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private authService: AuthService,
    private validationService: ValidationService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.createForm();
    this.formService.handleFormError(
      this.signUpForm,
      this.errorObserver,
      this.generateErrors
    );
    this.signUpForm.controls['confirmPassword'].disable();
  }

  generateErrors(name: string, owner: string) {
    switch (owner) {
      case 'firstName':
        if (name == 'required') {
          return 'First name is required';
        } else {
          return 'Invalid name';
        }
      case 'lastName':
        if (name == 'required') {
          return 'Last name is required';
        } else {
          return 'Invalid name';
        }
      case 'userName':
        if (name == 'required') {
          return 'User name is required';
        } else if (name == 'isExists') {
          return 'User name is already taken';
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
      case 'password':
        if (name == 'required') {
          return 'Password is required';
        } else {
          return 'Must contain both uppercase, lowercase letter and mini length 6, max 12';
        }
      case 'confirmPassword':
        if (name == 'required') {
          return 'Confirm password is required';
        } else {
          return 'Password must be same';
        }
    }
  }

  createForm() {
    return this.formBuilder.group(
      {
        firstName: [
          '',
          Validators.compose([Validators.minLength(3), Validators.required]),
        ],
        lastName: [
          '',
          Validators.compose([Validators.minLength(3), Validators.required]),
        ],
        userName: [
          '',
          Validators.compose([Validators.minLength(3), Validators.required]),
          this.validateUserName.bind(this),
        ],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
          this.validateEmail.bind(this),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(
              '^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$'
            ),
          ]),
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [
          this.MustMatch('password', 'confirmPassword'),
          this.shoudDisable('password', 'confirmPassword'),
        ],
      }
    );
  }

  validateUserName({
    value,
  }: AbstractControl): Observable<ValidationErrors | null> {
    return this.validationService.isUserNameAvailable(value);
  }

  validateEmail({
    value,
  }: AbstractControl): Observable<ValidationErrors | null> {
    return this.validationService.isEmailExists(value);
  }

  shoudDisable(value1: string, value2: string) {
    return (formGroup: FormGroup) => {
      const firstControl = formGroup.controls[value1];
      const secondControl = formGroup.controls[value2];

      firstControl.valueChanges.subscribe((res) => {
        if (res.length < 6 || firstControl.errors) {
          secondControl.disable({ emitEvent: false, onlySelf: true });
        } else {
          secondControl.enable({ emitEvent: false, onlySelf: true });
        }
      });
    };
  }

  MustMatch(value1: string, value2: string) {
    return (formGroup: FormGroup) => {
      const firstControl = formGroup.controls[value1];
      const secondControl = formGroup.controls[value2];

      if (secondControl.errors && secondControl.errors.mustMatch) {
        return;
      }

      if (firstControl.value !== secondControl.value) {
        return secondControl.setErrors({ mustMatch: true });
      } else {
        secondControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    if (!this.signUpForm.valid) {
      console.log('invalid');
      this.formService.checkFormStatus(this.signUpForm);
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
