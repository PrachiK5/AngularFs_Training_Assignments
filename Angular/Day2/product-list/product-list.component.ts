import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input()
  category: string = '';

  filteredProducts: Product[] = [];

  products: Product[] = [
    {
      category: 'Mobiles',
      pname: 'Samsung',
      pid: 1,
      price: 140,
      quantity: 5,
    },
    { category: 'Mobiles', pname: 'Iphone', pid: 2, price: 55000, quantity: 2 },
    {
      category: 'Electronics',
      pname: 'Trimmer',
      pid: 4,
      price: 999,
      quantity: 21,
    },
    {
      category: 'Electronics',
      pname: 'Straightener',
      pid: 5,
      price: 2500,
      quantity: 8,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.filteredProducts = this.products.filter(
      (item) => item.category == this.category
    );
  }
}
