import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-product',
  imports: [NgIf, FormsModule],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  productId: number | undefined;
  successMsg: string | undefined;
  errorMsg: string | undefined;

  constructor(private productService: ProductService) {}

  // Function to handle product deletion
  onDeleteProduct() {
    if (this.productId) {
      this.productService.deleteProduct(this.productId).subscribe({
        next: () => {
          this.successMsg = `Product with ID ${this.productId} has been successfully deleted.`;
          this.errorMsg = undefined;
          this.productId = undefined; // Clear the input field
        },
        error: (err) => {
          console.error(err);
          this.errorMsg = `Failed to delete the product with ID ${this.productId}. Please try again.`;
          this.successMsg = undefined;
        }
      });
    }
  }
}
