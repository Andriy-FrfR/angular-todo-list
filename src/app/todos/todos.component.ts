import { Todo } from './../shared/todos.service';
import { TodosService } from '../shared/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  loading = true;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe(() => {
      this.todos = this.todosService.todos;
      this.loading = false;
    });
  }

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
    console.log(this.todos);
  }
}
