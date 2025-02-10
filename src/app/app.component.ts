import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductsContainerComponent} from './products-container/products-container.component'
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ProductsContainerComponent,NavbarComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'products-app';
  // username: string = 'sara';
}
