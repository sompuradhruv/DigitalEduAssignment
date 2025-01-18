import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-form',
  imports: [NgIf, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name: string = '';
  price: number | undefined;
  category: string = '';
  successMsg: string | undefined;
  errorMsg: string | undefined;

  constructor(private productService: ProductService) {}

  onSubmit() {
    // Validate required fields
    if (!this.name || !this.price || !this.category) {
      this.errorMsg = 'All fields are required.';
      this.successMsg = undefined;
      return;
    }

    // Call the ProductService to add a new product
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      category: this.category
    }).subscribe({
      next: () => {
        this.successMsg = 'Product has been added successfully.';
        this.errorMsg = undefined;
        this.resetForm();
      },
      error: (err: any) => {
        console.log(err);
        this.errorMsg = err.message || 'Failed to add product. Please try again.';
        this.successMsg = undefined;
      }
    });
  }

  resetForm() {
    this.name = '';
    this.price = undefined;
    this.category = '';
  }

}
