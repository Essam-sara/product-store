import { Component } from '@angular/core';

@Component({
  selector: 'app-model',
  imports: [],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {

}
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage?: number;
  stock: number;
  brand?: string;
  thumbnail: string;
  quantity?: number; 
}
