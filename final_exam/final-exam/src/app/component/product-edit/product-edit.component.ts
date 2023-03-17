import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  productFormEdit: FormGroup;
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
        this.productFormEdit = new FormGroup({
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
    const product = this.productFormEdit.value;
    this.productService.update(id, product).subscribe(() => {
      this.router.navigateByUrl('');
      alert('Sửa Thàng công');
    });
  }
}
