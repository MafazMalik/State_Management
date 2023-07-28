import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public store: Store<any>) { }

  cartValue!: any;

  ngOnInit(): void {
    this.store.select('cart').subscribe(data => {
      this.cartValue = data.cart.length
    })
  }


}
