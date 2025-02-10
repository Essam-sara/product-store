import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import productsData from '../../assets/products.json';

@Component({
  selector: 'app-product-details',
  standalone: true,  
  imports: [CommonModule], 
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    product: any | undefined;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            const productId = Number(params['id']); 
            this.product = productsData.products.find(p => p.id === productId);
        });
    }
}
