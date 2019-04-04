import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

//let routesObject = require('../../assets/product.json');

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient) { 
  //  console.log(routesObject);
    
  }

  
  ngOnInit() {
    this.getJSON();
  }

  getJSON() {
    this.http.get('./assets/product.json').subscribe(
      data => {
        this.productList = data as any[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  price: any;
  product: string;
  productList = [];

  onClick() {
    this.productList.push({ product: this.product, price: this.price });
    this.product = '';
    this.price = '';
    console.log(JSON.stringify(this.productList));
  }

  removeProduct(i) {
    this.productList.splice(i, 1);
    // this.http.delete('./assets/product.json' + i).subscribe(
    //   data => {
    //     this.productList = data as any[];
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log(err.message);
    //   }
    // );
  }
}