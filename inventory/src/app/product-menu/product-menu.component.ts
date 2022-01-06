import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {
allProducts: Product[] = [];

  constructor(
    private productSVC: ProductService
  ) { }

  ngOnInit(): void {
    this.allProducts = this.productSVC.getAllProducts();
  }

}
