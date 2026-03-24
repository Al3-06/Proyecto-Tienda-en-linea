import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClientes: HttpClient) {}

  readAll() {
    return this.httpClientes.get('http://localhost:3000/api/torteria');
  }

  showByid(id: any) {
    return this.httpClientes.get(`http://localhost:3000/api/up-date-product/${id}`);
  }

  deleteProduct(id: any) {
    return this.httpClientes.delete(`http://localhost:3000/api/up-date-product/${id}`);
  }

  upDateProduct(id: any, data: any) {
    return this.httpClientes.put(`http://localhost:3000/api/up-date-product/${id}`, data);
  }

  getOrderById(id: any) {
    return this.httpClientes.get(`http://localhost:3000/api/orders/${id}`);
  }

}
