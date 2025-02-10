import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import productsData from '../../assets/products.json';

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent {
    products: any[] = (productsData as { products: any[] }).products;

    constructor(private router: Router) {}

    
    goToDetails(productId: number) {
        this.router.navigate(['/product-details', productId]); 
    }

    
    trackById(index: number, product: any): number {
        return product.id;
    }
}
