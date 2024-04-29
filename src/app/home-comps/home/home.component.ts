import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  categories: any = []
  products: any = []

  constructor(public apiService: ApiService) {
    this.getAllProducts()
  }

  ngOnInit(){
    this.apiService.getAllCategories().subscribe((data: any) => {
      this.categories = data
    })

}
categoryFilter(id: any) {
  this.apiService.getCategoryById(id).subscribe((data: any) => {
    this.products = data.products
  })
}

getAllProducts() {
  this.apiService.getAllProducts().subscribe((data) => {
    this.products = data
  })
}

}
