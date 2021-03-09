import { TodosService } from '../shared/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  loading = true;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false;
    });
  }
}
