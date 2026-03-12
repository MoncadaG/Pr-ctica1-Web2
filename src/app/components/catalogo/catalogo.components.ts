import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductoCardComponent } from '../producto-card/producto-card.component';
import { ProductsService } from '../../services/producto.service';
import { Carrito } from '../carrito/carrito';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductoCardComponent, Carrito],
  templateUrl: './catalogo.components.html',
  styleUrls: ['./catalogo.components.css'],
})
export class CatalogoComponent {

  private productsService = inject(ProductsService);

  // Signal con el arreglo de productos (valor inicial: [])
  products = toSignal(this.productsService.getAll(), { initialValue: [] });

}