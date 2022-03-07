import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from './models/menu-item.model';
import { User } from './models/user.model';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menuItem: Array<MenuItem> = [
    {text: 'Lista', url: '/'},
    {text: 'Pagina 2', url: '/pagina2', disabled: true},
    {text: 'Admin', url: '/admin', disabled: false},
  ]


  constructor(public api: ApiService, public userService: UserService) {
    console.log('app started');
  }

}
