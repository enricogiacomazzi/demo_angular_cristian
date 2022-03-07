import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Todo } from "../models/todo.model";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    public getTodos(): Observable<Array<Todo>> {
        return this.http.get<Array<Todo>>(this.baseUrl);
    }

    public addTodo(todo: Omit<Todo, 'id'>): Observable<Todo> {
        return this.http.post<Todo>(this.baseUrl, todo);
    }

    public editTodo(todo: Todo): Observable<Todo> {
        return this.http.patch<Todo>(`${this.baseUrl}/${todo.id}`, todo);
    }

    public deleteTodo(todoId: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${todoId + 1}`);
    }

}