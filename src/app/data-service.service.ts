import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


export class DataServiceService {
  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    // });
  }

  // public getJSON(): Observable<any> {
  //   //return this.http.get("./assets/product.json");
  //   //return this.http.get("./assets/product.json").map(res => res.json());

  //   this.http.get('./assets/birds.json').subscribe(
  //     data => {
  //       res => res.json()
  //       //  console.log(this.arrBirds[1]);
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log (err.message);
  //     }
  //   );
  // }
}