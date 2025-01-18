import { Component, OnInit , Input } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ProductService } from '../../service/product.service';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-visualize-table',
  imports: [ChartModule],
  templateUrl: './visualize-table.component.html',
  styleUrl: './visualize-table.component.css'
})
export class VisualizeTableComponent implements OnInit{

  products: any[] = [];
  barChartData: any;
  barChartOptions: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.prepareBarChartData();  // Prepare the chart data once the API call returns
      },
      error: () => {
        console.error('Error fetching products');
      }
    });
  }

  // Prepare chart data based on the product data
  prepareBarChartData() {
    const labels = this.products.map(product => product.name);  // Example: product names as labels
    const data = this.products.map(product => product.price);   // Example: product prices as data

    this.barChartData = {
      labels: labels,
      datasets: [
        {
          label: 'Product Price (₹)',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    };

    this.barChartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Price (₹)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Product Name'
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    };
  }


}
