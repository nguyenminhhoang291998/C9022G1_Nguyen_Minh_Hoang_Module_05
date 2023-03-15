import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {CategoryService} from "../../../service/category.service";
import {Product} from "../../../model/product";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService){
  }

  products: Product[] = [];
  productDelete: Product;
  idDelete: number;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  openDeleteModal(id: number) {
    this.idDelete = id;
    this.productService.findProductById(id).subscribe(product => {
      this.productDelete = product;
    })
  }

  onDelete() {
    this.productService.deleteProductById(this.idDelete).subscribe(() => {
      alert('Xóa thành công')
      this.getAll();
    }, e => {
      console.log(e);
      });
  }
}
