import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home/home.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../shared/store/cart.reducer';
import { AddCartComponent } from './component/add-cart/add-cart.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent,
    AddCartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
