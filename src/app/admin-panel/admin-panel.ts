import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpService } from '../services/http.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css',
})
export class AdminPanel implements OnInit, AfterViewInit {
  public listProducts: any[] = [];
  public listOrders: any[] = [];

  constructor(
    private httpService: HttpService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.readAll();
  }

  ngAfterViewInit() {
    this.initializeEventListeners();
    this.readAll();
  }

  readAll() {
    this.httpService.readAll().subscribe({
      next: (data: any) => {
        this.listProducts = [...data.products];
        this.listOrders = [...data.orders];
        this.cdr.detectChanges();
        (console.log(this.listProducts), this.listProducts);
        console.log(this.listOrders), this.listOrders;
      },
      error: (err) => {
        console.error('Error al obtener los productos:', err);
      },
    });
  }

  deleteProduct(id: any) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.httpService.deleteProduct(id).subscribe({
        next: () => {
          // Una vez borrado en la DB, lo quitamos de la lista que se ve en pantalla
          this.listProducts = this.listProducts.filter(p => Number(p.product_id) !== Number(id));
          this.cdr.detectChanges();
          alert('Producto eliminado correctamente');
        },
        error: (err) => console.error('Error al eliminar:', err)
      });
    }
  }

  private initializeEventListeners() {
    const btns = document.querySelectorAll('#btn-search');
    const views = document.querySelectorAll('#view');

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        views.forEach((view) => {
          view.classList.remove('view-cont--active');
        });
        btns.forEach((btn) => {
          btn.classList.remove('nav-lateral__btn--active');
        });
        const target = (btn as HTMLElement).getAttribute('aria-label');
        views.forEach((view) => {
          const targetView = (view as HTMLElement).getAttribute('aria-label');
          if (target === targetView) {
            view.classList.add('view-cont--active');
            btn.classList.add('nav-lateral__btn--active');
          }
        });
      });
    });
  }
}
