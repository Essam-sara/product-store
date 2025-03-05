import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Product } from '../../app/model/model.component';
import { ProductRequestService } from '../services/prouduct-request.service';
import { NgxPaginationModule } from 'ngx-pagination';  // ✅ Import Pagination

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],  // ✅ Include Pagination
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {
  products: Product[] = [];  
  loading: boolean = true;  
  errorMessage: string | null = null;  

  // ✅ Pagination Variables
  currentPage: number = 1;
  itemsPerPage: number = 6; 

  constructor(
    private router: Router, 
    private cartService: CartService,
    private productRequestService: ProductRequestService  
  ) {}

  ngOnInit(): void {
    this.fetchProducts();  // ✅ Fetch products from API
  }

  fetchProducts(): void {
    this.loading = true;
    this.errorMessage = null;

    this.productRequestService.getProductRequest().subscribe({
      next: (res: any) => {
        if (res && Array.isArray(res.products)) {
          this.products = res.products.map((product: Product) => ({
            ...product,
            quantity: product.quantity ?? 1 
          }));
        } else {
          this.errorMessage = 'Invalid API response.';
          console.error('Invalid API response:', res);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.errorMessage = 'Failed to load products. Please try again later.';
        this.loading = false;
      }
    });
  }

  goToDetails(productId: number): void {
    this.router.navigate(['/product-details', productId]); 
  }

  trackById(index: number, product: Product): number {
    return product.id;  
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
