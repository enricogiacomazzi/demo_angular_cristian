import { CommonModule,  } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTodo } from './components/add-todo.component';
import { ListItem } from './components/list-item.component';
import { List } from './components/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItem,
    List,
    AddTodo
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
