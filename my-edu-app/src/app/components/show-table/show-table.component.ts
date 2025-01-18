import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-show-table',
  imports: [NgIf, NgFor],
  templateUrl: './show-table.component.html',
  styleUrl: './show-table.component.css'
})
export class ShowTableComponent implements OnInit {
  products: any[] = [];      // Array to store the fetched products
  successMsg: string | undefined;
  errorMsg: string | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  // Fetch all products from the backend using the ProductService
  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.successMsg = 'Products fetched successfully!';
        this.errorMsg = undefined;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Failed to fetch products. Please try again.';
        this.successMsg = undefined;
      }
    });
  }

}
