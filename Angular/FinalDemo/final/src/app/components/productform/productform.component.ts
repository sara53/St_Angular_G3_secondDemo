import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css'],
})
export class ProductformComponent implements OnInit {
  productName: string = '';
  productPrice: string = '';
  productId: any;
  product: any;
  constructor(
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.product != 0) {
      this.productServices.getProductById(this.productId).subscribe({
        next: (response) => {
          this.product = response;
          this.productName = this.product.productName;
          this.productPrice = this.product.price;
        },
      });
    }
  }
  formOperation(e: any) {
    e.preventDefault();
    let product = {
      productName: this.productName,
      price: this.productPrice,
    };
    if (this.productId == 0) {
      this.productServices.addNewProduct(product).subscribe();
    } else {
      this.productServices.editProduct(this.productId, product).subscribe();
    }

    this.router.navigate(['/products']);
  }
}
