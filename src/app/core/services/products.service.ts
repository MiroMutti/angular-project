import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './../../shared/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(
        private fireDb:  AngularFirestore
    ) { }

  

}