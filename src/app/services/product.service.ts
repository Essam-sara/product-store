import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private jsonUrl = 'assets/products.json';
  private counter = new BehaviorSubject<number>(0)
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
  getCounter(){
    return this.counter.asObservable();
  }
  changeCounter(newValue:number){
    this.counter.next(newValue);
  }
  
}
