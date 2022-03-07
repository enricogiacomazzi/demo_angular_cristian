import { Injectable } from "@angular/core";
import { HttpClient  } from '@angular/common/http';
import { delay, map, Observable, of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {
    }

    public isUsernameBusy(username: string) : Observable<boolean> {
        return this.http.get<Array<{id: number, username: string}>>('http://localhost:3000/users').pipe(
            map((users) => users.some(x => x.username === username)),
            delay(4000)
        );
    }
}