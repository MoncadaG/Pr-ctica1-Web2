import { Component, Input, inject } from '@angular/core';
import { Product } from '../../models/producto.models';
import { CurrencyPipe } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.css',
})
export class ProductoCardComponent {

  @Input({required: true}) product!: Product;

  carrito = inject(CarritoService);

  agregarCarrito(){
    this.carrito.agregar(this.product);
  }

}