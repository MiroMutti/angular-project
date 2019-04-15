import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, APP_SECRET } from '../../kinvey.tokens';
import { Order } from './../../shared/models/order.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
    private readonly ALL_ORDERS = `${this.BASE_URL}/orders?query={}&sort={"_kmd.ect": -1}`;
    private readonly CREATE_ORDER = `${this.BASE_URL}/orders`;
    private readonly API_KEY = 'a2lkX1N5blUwdHlxRTozMzBhYzM2NjY3MTY0NTMwYTJmYjIwMGQzMjExNjg3OA=='
    
    constructor(
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get<Order[]>(this.ALL_ORDERS, {
            headers: new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }

    createOrder(body: Object) {
        return this.http.post(this.CREATE_ORDER, body, {
            headers: new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }

    getById(id: string) {
        return this.http.get<Order>(this.CREATE_ORDER + `/${id}`, {
            headers: new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }

    getDetails(id: string) {
        return this.http.get<Order>(this.CREATE_ORDER + `/${id}`, {
            headers: new HttpHeaders({
                'Authorization': `Basic ${this.API_KEY}`
            })
        });
    }

    editORDER(body: Object, id: string) {
        return this.http.put(this.CREATE_ORDER + `/${id}`, body, {
            headers: new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }
}