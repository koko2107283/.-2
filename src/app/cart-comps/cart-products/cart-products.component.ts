import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.scss'
})
export class CartProductsComponent {

  products: any
  
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBasket().subscribe((data: any) => {
      this.products = data
    });
  }

}
