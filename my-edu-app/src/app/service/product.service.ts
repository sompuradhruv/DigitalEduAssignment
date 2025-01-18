import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private createApi = 'http://localhost:8081/add';
  private readApi = 'http://localhost:8081/all';
  private updateApi = 'http://localhost:8081/update/';
  private deleteApi = 'http://localhost:8081/delete/';

  constructor(private httpClient: HttpClient) { }

  addProduct(entry: any): Observable<any> {
    return this.httpClient.post(this.createApi, entry);
  }

  getProducts(): Observable<any> {
    return this.httpClient.get(this.readApi);
  }

  updateProduct(id: number, entry: any): Observable<any> {
    return this.httpClient.put(this.updateApi + id, entry);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(this.deleteApi + id);
  }
}
