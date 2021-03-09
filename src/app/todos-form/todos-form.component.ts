import { TodosService } from './../shared/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.scss']
})
export class TodosFormComponent implements OnInit {
  title = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTodo(): void {
    this.todosService.addTodo(this.title);
  }
}
