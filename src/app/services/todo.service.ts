
import { Injectable } from "@angular/core";
import { Todo } from "../models/todo.model";
import { ApiService } from "./api.service";




@Injectable({
    providedIn: 'root'
})
export class TodoService {
    public items: Todo[] = [];

    constructor(private api: ApiService) {}

    public getTodos(): void {
        const request$ = this.api.getTodos();
        request$.subscribe(values => {
            this.items = values;
        });  
    }

    toggleCompleted(todoId: number) {
        const toEdit = this.items.find(t => t.id === todoId);
        if(toEdit) {
            // toEdit.completed = !toEdit.completed;
            const edited = {id: toEdit.id, completed: !toEdit.completed}
            this.api.editTodo(edited as Todo).subscribe(item => {
                this.items = this.items.map(todo => todo.id === item.id ? 
                    item : todo);
            });
        }
      }
    
      deleteItem(todoId: number) {
        this.api.deleteTodo(todoId).subscribe(() => {
            this.items = this.items.filter(todo => todo.id !== todoId);
        });
      }
    
      addTodo(label: string): void {
        const newItem: Omit<Todo, 'id'> = {
          label,
          completed: false
        };

        this.api.addTodo(newItem).subscribe(item => {
            this.items = [...this.items, item];
        });
      }
    
      editItem(todoId: number): void {
        const todo: Todo | undefined = this.items.find(x => x.id === todoId);
        if(todo) {
            const editedValue = window.prompt(`Modifica item ${todoId}`, todo.label);
            if(!!editedValue) {
                const editedTodo = {...todo, label: editedValue};
                this.api.editTodo(editedTodo).subscribe({
                        next: edited => this.items = this.items.map(todo => todo.id === todoId ? edited : todo),
                        error: err => {
                            debugger;
                            console.log('prova');
                            window.alert("Errore, id non trovato");
                        }
                    });
              } 
        }
      }
}