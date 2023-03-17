import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {iterator} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  categoryList: Category[] = [];

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCate();
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      category: new FormControl('Chọn loại'),
      price: new FormControl()
    });
  }

  getAllCate() {
    this.categoryService.getAll().subscribe(categories => {
      this.categoryList = categories;
    });
  }


  onSubmit() {
    const product = this.productForm.value;
    this.productService.save(product).subscribe(() => {
      this.router.navigateByUrl('');
      alert('thêm thành công');
    });
  }
}
