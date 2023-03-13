import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {Router} from "@angular/router";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  products: Product[] = [];
  productDelete: Product;
  idDelete: number;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  openDeleteModal(id: number) {
    this.idDelete = id;
    this.productDelete = this.productService.findProductById(id);
  }

  onDelete() {
    this.productService.deleteProductById(this.idDelete)
  }
}
