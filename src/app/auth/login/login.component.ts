import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../core/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    this.authService
      .signIn(this.form.value)
      .subscribe((data) => {
        this.authService.saveUserInfo(data);
        this.snackbar.open('Successfully logged in!', 'Undo', {
          duration: 4500
        })
        this.router.navigate(['/'])
      }, (error) => {
          this.snackbar.open('Error! Incorrect username or password!', 'Undo', {
            duration: 4500
          })
      })
  }

  get f(){ return this.form.controls }

}
