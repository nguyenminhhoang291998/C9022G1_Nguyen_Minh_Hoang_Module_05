import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {EditComponent} from './todo/edit/edit.component';


const routes: Routes = [
  {path: 'todos', component: TodoComponent},
  {path: 'todos/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
