import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../../app/model/model.component';
import { ProductRequestService } from '../services/prouduct-request.service'; // ✅ Fixed import

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  loading: boolean = true;  // ✅ Show loading state
  errorMessage: string | null = null;  // ✅ Handle errors

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private cartService: CartService,
    private productRequestService: ProductRequestService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = Number(params['id']);
      
      // ✅ Fetch product directly from API
      this.fetchProduct(productId);
    });
  }

  fetchProduct(productId: number) {
    this.loading = true;
    this.errorMessage = null;

    this.productRequestService.getProductDetailsRequest(productId.toString()).subscribe({
      next: (res: any) => {
        this.product = res;
        if (this.product) {
          this.product.brand = this.product.brand ?? 'Unknown Brand';
          this.product.quantity = this.product.quantity ?? 1;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching product:', error);
        this.errorMessage = 'Failed to load product details.';
        this.loading = false;
      }
    });
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
