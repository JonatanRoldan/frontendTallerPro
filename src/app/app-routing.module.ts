import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{CarroComponent}from'./carro/carro.component'
import{HomeComponent}from './home/home.component'

const routes: Routes = [
  {path: 'carro', component: CarroComponent},
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
