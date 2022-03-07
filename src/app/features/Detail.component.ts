import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription, switchMap, take } from 'rxjs';
import { User } from '../models/user.model';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'list-detail',
  template: `
    <h1>dettaglio</h1>
    <div *ngIf="user$ | async as user else loading"> 
      <div>{{user.name}}</div>
      <div>{{user.username}}</div>
      <div>{{user.email}}</div>
      <div>{{user.address.city}}</div>
      <div>{{user.phone}}</div>
    </div>

    <ng-template #loading>
      <div>
        Loading...
      </div>
    </ng-template>
  `
})
export class DetailComponent {
  public id$!: Observable<number>;
  public user$!: Observable<User>;
  // public user: User | null = null;
  
  constructor(public activeRoute: ActivatedRoute, private api: ApiService) {
    this.activeRoute.queryParams.subscribe(q => {
      console.log('query', q);
    })
    // console.log('pppp', this.activeRoute.snapshot.params['id']);
    // this.activeRoute.params.subscribe(p => {
    //   const id = p['id'];
    //   this.api.GetUser(id).subscribe(user => {
    //     this.user = user;
    //   });
    // });

    this.user$ = this.activeRoute.params.pipe(
      map(p => p['id']),
      map(id => parseInt(id, 10)), //optional
      switchMap(id => this.api.GetUser(id))
      );
  }
}
