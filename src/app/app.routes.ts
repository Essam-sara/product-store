import { Routes } from '@angular/router';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', component: ProductsContainerComponent, title: 'All Products' },
    { path: 'register', component: RegisterComponent, title: 'Register' },
    { path: 'login', component: LoginComponent, title: 'Login' },
    { path: 'product-details/:id', component: ProductDetailsComponent, title: 'More About Product' }, 
    { path: 'app-cart', component: CartComponent, title: 'Shopping Cart' },
    { path: '**', component: NotFoundComponent, title: 'Page Not Found' }
];

