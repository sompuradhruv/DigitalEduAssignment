import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  imports: [NgIf, FormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  productId: number | undefined;
  name: string | undefined;
  price: number | undefined;
  category: string | undefined;
  successMsg: string | undefined;
  errorMsg: string | undefined;

  constructor(private productService: ProductService) {}

  // Function to handle updating the product
  onUpdateProduct() {
    const updatedProduct = {
      name: this.name,
      price: this.price,
      category: this.category
    };

    if (this.productId) {
      this.productService.updateProduct(this.productId, updatedProduct).subscribe({
        next: () => {
          this.successMsg = `Product with ID ${this.productId} has been successfully updated.`;
          this.errorMsg = undefined;
          this.resetForm();
        },
        error: (err) => {
          console.error(err);
          this.errorMsg = `Failed to update the product with ID ${this.productId}. Please try again.`;
          this.successMsg = undefined;
        }
      });
    }
  }

  // Reset form fields after successful update
  resetForm() {
    this.productId = undefined;
    this.name = undefined;
    this.price = undefined;
    this.category = undefined;
  }

}
