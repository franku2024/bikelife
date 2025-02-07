import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
  path:"",component:InicioComponent
},
{
  path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
