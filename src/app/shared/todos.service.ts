import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/?_limit=3')
      .pipe(tap(todos => this.todos = todos));
  }

  deleteTodo(id: number): void {
    this.todos.forEach((todo, index) => {
      if (todo.id === id) {
        this.todos.splice(index, 1);
      }
    });
  }

  addTodo(todoTitle: string): void {
    this.todos.push({
      id: Date.now(),
      title: todoTitle,
      completed: false
    });
  }
}
