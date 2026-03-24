import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <--- IMPORTANTE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // <--- AGREGAR AQUÍ
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Aquí ya no debe haber lógica de productos, solo está vacío
}