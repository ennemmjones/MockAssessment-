import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
inventory: Product[] = [
  {name: "RAM", productID: 1, price: 56},
  {name: "i7 CPU", productID: 2, price: 87},
  {name: "Motherboard", productID: 3, price: 137},
  {name: "HDD", productID: 4, price: 67},
  {name: "Cooling Fan", productID: 5, price: 14},
  {name: "Power Supply", productID: 6, price: 35},
]
  constructor() { }

  getAllProducts() {
    var inventory = this.inventory;
    return inventory;
  }
}
