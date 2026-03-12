import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {

  carritoService = inject(CarritoService);

  carrito = this.carritoService.carrito;

  total(){
    return this.carritoService.total();
  }

  comprar(){
    alert("Compra realizada correctamente");
    this.carritoService.limpiar();
  }

  generarTicket(){

    const productos = this.carrito();

    let xml = `<ticket>
<fecha>${new Date().toLocaleDateString()}</fecha>
<productos>`;

    productos.forEach(p => {

      xml += `
<producto>
<nombre>${p.name}</nombre>
<precio>${p.price}</precio>
</producto>`;

    });

    xml += `
</productos>
<total>${this.total()}</total>
</ticket>`;

    const blob = new Blob([xml], { type: 'application/xml' });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = "ticket.xml";

    a.click();

    window.URL.revokeObjectURL(url);
  }

}