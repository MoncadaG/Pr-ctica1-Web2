import { Component,Input } from '@angular/core';
import { Product } from '../../models/producto.models';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-producto-card',
  standalone : true,
  imports: [CurrencyPipe],
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.css',
})

export class ProductoCardComponent {
    @Input( {required : true} ) product! : Product;
}
