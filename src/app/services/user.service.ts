import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})
export class UserService {

    public IsAdmin: boolean = false;

    constructor() {
        this.IsAdmin = localStorage.getItem('token') === 'true';
    }

    public ToggleIsAdmin() {
        this.IsAdmin = !this.IsAdmin;
        localStorage.setItem('token', this.IsAdmin.toString());
    }

}