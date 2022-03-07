import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'pag1',
        component: Pagina1Component
      },
      {
        path: 'pag2',
        component: Pagina2Component
      }
    ]
  }
]



@NgModule({
  declarations: [
    DashboardComponent,
    Pagina1Component,
    Pagina2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
