import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/model.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  private cartCounter = new BehaviorSubject<number>(0);

  constructor() {}

  getCart(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  getCounter(): Observable<number> {
    return this.cartCounter.asObservable();
  }

  addToCart(product: Product) {
    const existingProduct = this.cart.find(p => p.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity ?? 1) + 1; 
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  
    this.updateCartState();
  }
  

  updateQuantity(productId: number, quantity: number) {
    const product = this.cart.find(p => p.id === productId);
    if (product) {
      product.quantity = quantity ?? 1; 
      this.updateCartState();
    }
  }
  

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(product => product.id !== productId);
    this.updateCartState();
  }

  clearCart() {
    this.cart = [];
    this.updateCartState();
  }

  private updateCartState() {
    this.cartSubject.next([...this.cart]);
    this.cartCounter.next(
      this.cart.reduce((total, item) => total + (item.quantity ?? 1), 0) 
    );
  }
}