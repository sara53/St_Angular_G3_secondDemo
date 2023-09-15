import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private productServices: ProductService) {}
  ngOnInit(): void {
    this.productServices.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
    });
  }

  deleteMyProduct(productId: any) {
    this.productServices.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(
          (product: any) => product.id != productId
        );
      },
    });
  }
}
