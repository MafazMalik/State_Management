import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AddCartComponent } from './component/add-cart/add-cart.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "addCart",
    component: AddCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
