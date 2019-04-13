import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../core/services/auth.service';
import { Router } from '@angular/router';

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
        //this.toastr.success('Logged in successfully', 'Success!');
        this.authService.saveUserInfo(data);
        this.router.navigate(['/']);
      })
  }

  get f(){ return this.form.controls }

}
