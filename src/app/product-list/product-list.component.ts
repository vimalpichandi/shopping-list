import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList = [];

  constructor(private http: HttpClient) { }

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
}
