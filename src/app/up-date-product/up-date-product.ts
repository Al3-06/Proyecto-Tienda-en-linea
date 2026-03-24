import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component, OnInit, signal } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-up-date-product',
  standalone: true,
  templateUrl: './up-date-product.html',
  styleUrl: './up-date-product.css',
  imports: [FormsModule],
})
export class upDateProduct implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.getProduct(id);
  }

  product = signal<any>({ name: '', description: '', price: 0, stock: 0 });

  getProduct(id: number) {
    this.httpService.showByid(id).subscribe({
      next: (data: any) => {
        this.product.set(data.product || data);
        console.log(this.product());
      },
      error: (err) => {
        console.error('Error al obtener el producto:', err);
      },
    });
  }

  upDateProduct(id: any) {
    if (confirm('¿Estás seguro de que quieres actualizar este producto?')) {
      const payload: any = {
        ...this.product(),
        stock: this.product().stock ?? this.product().product_stock,
      }
      delete payload.product_stock

      this.httpService.upDateProduct(id, payload).subscribe({
        next: () => {
          this.router.navigate(['/adminPanel']);
          alert('Producto actualizado correctamente');
        },
        error: (err) => console.error('Error al actualizar:', err),
      });
    }
  }

  public readfile(file: File) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgPreview: any = document.getElementById('img-preview');
      if (imgPreview) {
        const target = e.currentTarget as any;
        imgPreview.src = target.result as string;
      }
    };
    reader.readAsDataURL(file);
  }
}
