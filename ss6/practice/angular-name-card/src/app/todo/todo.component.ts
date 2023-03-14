import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.toReload();
  }

  toReload() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.saveTodo(todo).subscribe(() => {
        this.toReload();
      }, e => {
        console.log(e);
      });
      this.content.reset();
    }
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  delete(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.toReload();
      alert('Xóa thành công');
    }, e => {
      console.log(e);
    });
  }
}
