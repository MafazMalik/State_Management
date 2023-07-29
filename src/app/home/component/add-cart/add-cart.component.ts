import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeCart } from 'src/app/shared/store/cart.action';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent {
  constructor(public _store: Store<any>) { }

  cartValue!: any;

  ngOnInit(): void {
    this._store.select('cart').subscribe(data => {
      this.cartValue = data.cart;
    })
  }

  removeCart(product: any) {

    const payload: any = { product };

    this._store.dispatch(removeCart(payload));
  }

}
