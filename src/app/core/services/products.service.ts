import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, APP_SECRET } from '../../kinvey.tokens';
import { Product } from './../../shared/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
    private readonly ALL_PRODUCTS = `${this.BASE_URL}/products?query={}&sort={"_kmd.ect": -1}`;
    private readonly CREATE_PRODUCT = `${this.BASE_URL}/products`;
    private readonly API_KEY = 'a2lkX1N5blUwdHlxRTozMzBhYzM2NjY3MTY0NTMwYTJmYjIwMGQzMjExNjg3OA=='

     categories = ['iPhone', 'iPad', 'Macbook', 'Accessories']

    constructor(
        private http: HttpClient
    ) { }

    allCategories() {
        return this.categories
    }

    getAll() {
        return this.http.get<Product[]>(this.ALL_PRODUCTS, {
            headers: new HttpHeaders({
                'Authorization': `Basic ${this.API_KEY}`
            })
        });
    }

    createProduct(body: Object) {
        return this.http.post(this.CREATE_PRODUCT, body, {
            headers: new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }

    getById(id: string) {
        return this.http.get<Product>(this.CREATE_PRODUCT + `/${id}`, {
            headers: new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }

    getDetails(id: string) {
        return this.http.get<Product>(this.CREATE_PRODUCT + `/${id}`, {
            headers: new HttpHeaders({
                'Authorization': `Basic ${this.API_KEY}`
            })
        });
    }

    editProduct(body: Object, id: string) {
        return this.http.put(this.CREATE_PRODUCT + `/${id}`, body, {
            headers: new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }

    deleteProduct(id: string) {
        return this.http.delete(this.CREATE_PRODUCT + `/${id}`, {
            headers: new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }

    getProductsCategory(category: string){
        return this.http.get<Product[]>(this.CREATE_PRODUCT + `?query={"category":"${category}"}&sort={"_kmd.ect": -1}`, {
            headers: new HttpHeaders({
                'Authorization': `Basic ${this.API_KEY}`
            })
        });
    }
}