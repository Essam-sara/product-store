import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Product } from '../../app/model/model.component';
import { ProductRequestService } from '../services/prouduct-request.service'; // ✅ Fixed import

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {
  products: Product[] = [];  
  loading: boolean = true;  // ✅ Loading state
  errorMessage: string | null = null;  // ✅ Error handling

  constructor(
    private router: Router, 
    private cartService: CartService,
    private productRequestService: ProductRequestService  
  ) {
    console.log('Constructor initialized.');
  }

  ngOnInit(): void {
    console.log('OnInit.');
    this.fetchProducts(); // ✅ Fetch products from API
  }

  fetchProducts() {
    this.loading = true;
    this.errorMessage = null;

    this.productRequestService.getProductRequest().subscribe({
      next: (res: any) => {
        if (res && res.products) {
          this.products = res.products.map((product: Product) => ({
            ...product,
            quantity: product.quantity ?? 1
          }));
        } else {
          this.errorMessage = 'Invalid API response';
          console.error('Invalid API response:', res);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.errorMessage = 'Failed to load products.';
        this.loading = false;
      }
    });
  }

  goToDetails(productId: number) {
    this.router.navigate(['/product-details', productId]); 
  }

  trackById(index: number, product: Product): number {
    return product.id;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
