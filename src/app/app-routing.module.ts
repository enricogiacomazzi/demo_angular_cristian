import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './features/Detail.component';
import { Pag1Component } from './features/Pag1.component';
import { Pag2Component } from './features/Pag2.component';
import { AuthGuard } from './guards/Auth.guard';

const routes: Routes = [
  {
    path: '',
    component: Pag1Component,
  },
  {
    path: 'pagina2',
    component: Pag2Component,
    canActivate: [AuthGuard],

  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
