import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  id: number;
  productFormDelete: FormGroup;
  categoryList: Category[];

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCate();
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = +param.get('id');
      this.productService.findById(this.id).subscribe(product => {
        this.productFormDelete = new FormGroup({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          category: new FormControl(this.categoryList.filter(item => item.id === product.id)[0]),
          price: new FormControl(product.price)
        });
      });
    });
  }

  getAllCate() {
    this.categoryService.getAll().subscribe(categories => {
      this.categoryList = categories;
    });
  }

  onSubmit(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.router.navigateByUrl('');
      alert('Sửa Thàng công');
    });
  }

}
