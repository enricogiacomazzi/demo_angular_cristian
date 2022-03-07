import { ViewEncapsulation } from '@angular/compiler';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todo } from './models/todo.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  template: `
    <app-add-todo (addTodo)="todoService.addTodo($event)"></app-add-todo>
    <app-list
      [items]="todoService.items"
      (onCompletedClick)="todoService.toggleCompleted($event)"
      (onDeleteClick)="todoService.deleteItem($event)"
      (onEditClick)="todoService.editItem($event)">
    </app-list>
    <pre>{{todoService.items.length}}</pre>
  `,
  styles: [
    `
      .rosso {
        background-color: violet;
    }
    `],
    changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {

  constructor(public todoService: TodoService) {
    this.todoService.getTodos();
  }
}



