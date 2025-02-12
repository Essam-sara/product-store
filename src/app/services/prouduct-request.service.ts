import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {  // ✅ Fixed name

  constructor(private http: HttpClient) { }

  getProductRequest() : Observable<any>{
    return this.http.get('https://dummyjson.com/products',{
      params:{limit: 50,
        sortBy: 'name',
        order:'asc',
      },
    });
  }

  getProductDetailsRequest(id: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${id}`);  // ✅ Correct string interpolation
  }
}
