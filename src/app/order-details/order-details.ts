import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpService } from '../services/http.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-details.html',
  styleUrl: './order-details.css',
})
export class OrderDetails implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.getOrder(id);
  }

    order = signal<any>({ order_id: '', total_price: 0, order_date: '', products: [] });
  getOrder(id: number) {
    this.httpService.getOrderById(id).subscribe({
      next: (data: any) => {
        this.order.set(data.order || data);
        console.log(this.order());
      },
      error: (err) => {
        console.error('Error al obtener el pedido:', err);
      },
    });
  }

}
