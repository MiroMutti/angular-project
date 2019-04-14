import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './../../core/validators/confirm-password.validator';
import { AuthService } from './../../core/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },{
      validator: ConfirmPasswordValidator.MatchPassword
   })
  }

  register() {
    this.authService
      .signUp(this.form.value)
      .subscribe((data) => {
        this.snackbar.open('Success! You are registered user.', 'Undo', {
          duration: 4500
        })
        this.router.navigate([ '/auth/login' ]);
      }, (error) => {
        console.log(error)
        this.snackbar.open(`Error! ${error['error']['description']}!`, 'Undo', {
          duration: 4500
        })
    })
  }

  get f(){ return this.form.controls }

}
