import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':enter', [
        style({ transform: 'translateX(-350px)', opacity: 0 }),
        animate(
          '1s ease-out',
          style({ transform: 'translateX(0%)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class SiginComponent implements OnInit {
  loginForm: FormGroup;

  errorObserver$ = {
    email: '',
  };

  constructor (
    private formBuilder: FormBuilder,
    private formService: FormService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.createForm();
    this.formService.handleFormError(
      this.loginForm,
      this.errorObserver$,
      this.errorTypeGenerator
    );
  }

  errorTypeGenerator(type: string, owner: string) {
    switch (owner) {
      case 'email':
        return 'Email is required';
    }
  }

  createForm() {
    return this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.formService.checkFormStatus(this.loginForm);
      return;
    }
    const result = Object.assign({}, this.loginForm.value);
    console.log(result);

    this.authService.signin(result).subscribe((res) => {
      console.log(res);
    });
  }
}
