import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'filter-cards',
  templateUrl: './filter-cards.component.html',
  styleUrl: './filter-cards.component.scss'
})
export class FilterCardsComponent {

    // filtris ts

  sliderValue: string | number = -1;

  onInputChange(event: any) {
    const value = parseInt(event.target.value, 10);
    this.sliderValue = value === -1 ? "Not Chosen" : value;
  }

  onChange(event: any) {
    const value = parseInt(event.target.value, 10);
    this.sliderValue = value === -1 ? "Not Chosen" : value;
  }






  products: any
  
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllProducts().subscribe((data: any) => {
      this.products = data
    });
  }

  categoryFilter(id: any) {
    this.apiService.getCategoryById(id).subscribe((data: any) => {
      this.products = data.products
    })
  }








}
