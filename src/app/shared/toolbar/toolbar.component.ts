import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../../core/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() onToggleSidenav = new EventEmitter<void>()

  username: string = '';
  isLoggedIn: boolean;
  isAnonimous: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.username = localStorage.getItem('username');
    this.isLoggedIn = this.authService.isAuthenticated();
    this.isAnonimous = this.authService.isAnonimous();
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        localStorage.clear();
        this.router.navigate([ '/auth/login' ]);
        this.snackbar.open('Logout Successful.', 'Undo', {
          duration: 4500
        });
      });
  }

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }

}
