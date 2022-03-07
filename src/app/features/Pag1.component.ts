import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'pag-one',
  template: `
  <div class="list-group">
    <a *ngFor="let user of users$ | async"
        (click)="gotoDetail(user)"
        class="list-group-item list-group-item-action">
        {{user.name}}
    </a>
  </div>
  `
})
export class Pag1Component {
  public users$!: Observable<Array<User>>;

  constructor(public api: ApiService, private router: Router) {
    this.users$ = this.api.GetUsers();
  }

  gotoDetail(user: User) {
      this.router.navigate(['/detail', user.id]);
  }
}
