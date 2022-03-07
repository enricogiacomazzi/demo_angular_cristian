import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    //private readonly baseUrl = 'https://jsonplaceholder.typicode.com/';
    private readonly baseUrl = '';

    constructor(private http: HttpClient) {}

    public GetUsers(): Observable<Array<User>> {
        return this.http.get<Array<User>>(this.baseUrl + 'users');
    }

    public GetUser(id: number): Observable<User> {
        return this.http.get<User>(this.baseUrl + 'users/' + id);
    }
}