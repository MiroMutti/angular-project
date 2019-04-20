# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project structure

### Auth Module

Login Component

Register Component

### Product Module

List Products Component

Details Product Component

Create Product Component - Admin

Delete Product Component - Admin

### Order Module

My Orders Component - User Authentication

All Orders Component - Admin

## Models

Product interface

Order interface

## Services

Auth Service

Product Service

Order Service

## Guards

Auth Guard

Admin Guard

Anonimous Guard

## Routes 

/

/auth/login

/auth/register

/products/all

/products/search?search={query}

/products/details/:id

/products/create - Admin

/orders/my-orders - Authenticated

/orders/all-orders - Admin
