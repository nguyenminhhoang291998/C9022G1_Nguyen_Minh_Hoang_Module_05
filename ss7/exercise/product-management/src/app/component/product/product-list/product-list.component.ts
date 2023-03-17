import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {CategoryService} from "../../../service/category.service";
import {Product} from "../../../model/product";
import Swal from "sweetalert2"
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
  sortByName: boolean = true;
  products: Product[] = [];
  productDelete: Product;
  idDelete: number;
  @Input('data') meals: string[] = [];
  page: number = 0;

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
      Swal.fire({
        title: "Xóa",
        text: "Xóa thành công",
        icon: "success",
        confirmButtonText: "Ok"
      })
      this.getAll();
    }, e => {
        alert(e)
        });
  }

  search(value: string) {
    this.productService.search(value).subscribe(products => {
      this.products = products;
    })
  }

  sort() {
    if(this.sortByName){
      this.productService.sortAsc().subscribe(products => {
        this.products = products;
      })
    }else {
      this.productService.sortDesc().subscribe(products => {
        this.products = products;
      })
    }
    this.sortByName = !this.sortByName;
  }
}
