import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../../core/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ProductService } from './../../core/services/products.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  username: string = '';
  isLoggedIn: boolean;
  isAnonimous: boolean;
  isAdmin: boolean;
  categories: Array<string>

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.categories = this.productService.allCategories()
  }

  ngDoCheck() {
    this.username = localStorage.getItem('username');
    this.isLoggedIn = this.authService.isAuthenticated();
    this.isAnonimous = this.authService.isAnonimous();
    this.isAdmin = this.authService.isAdmin();
  }

  getCategory() {
    this.categories = this.productService.allCategories()
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
        this.snackbar.open('Logout Successful.', 'Undo', {
          duration: 4500
        });
      });
  }
}
