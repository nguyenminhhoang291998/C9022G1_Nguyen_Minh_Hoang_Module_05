import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEdit: FormGroup;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
    });
    this.todoService.findById(this.id).subscribe(todo => {
      this.formEdit = new FormGroup({
        id: new FormControl(todo.id),
        content: new FormControl(todo.content),
        complete: new FormControl(todo.complete),
      });
    });
  }
  update(id: number) {
    this.todoService.updateTodo(id, this.formEdit.value).subscribe(() => {
      alert('Sửa thành công');
      this.router.navigateByUrl('/todos');
    }, e => {
      console.log(e);
    });
  }

}
