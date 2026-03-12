import { Injectable, signal } from '@angular/core';
import { Product } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito = signal<Product[]>([]);

  agregar(product: Product) {
    this.carrito.update(items => [...items, product]);
  }

  eliminar(index: number) {
    this.carrito.update(items => items.filter((_, i) => i !== index));
  }

  total() {
    return this.carrito().reduce((sum, p) => sum + p.price, 0);
  }

  limpiar() {
    this.carrito.set([]);
  }

}