import { Routes } from '@angular/router';
import { AdminPanel } from './admin-panel/admin-panel';
import { LoginAdmin } from './login-admin/login-admin';
import { RegisterUser } from './register-user/register-user';
import { Tortas } from './tortas-gloria/tortas-gloria';
import { upDateProduct } from './up-date-product/up-date-product';
import { OrderDetails } from './order-details/order-details';

export const routes: Routes = [
  {path : 'Tortas', component: Tortas},
  { path: 'adminPanel', component: AdminPanel },
  { path: 'upDateProduct', component: upDateProduct },
  { path: 'order-details/:id', component: OrderDetails },
  { path: 'login-admin', component: LoginAdmin },
  { path: 'register-user', component: RegisterUser },
  { path: '', redirectTo: 'Tortas', pathMatch: 'full' },
  { path: '**', redirectTo: 'Tortas' }
];
