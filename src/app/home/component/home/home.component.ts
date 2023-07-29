import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TrainingService } from 'src/app/shared/services/training.service';
import { addCart } from 'src/app/shared/store/cart.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public _store: Store<{
    cart: { count: any }
  }>, public _trainingService: TrainingService) { }

  ngOnInit(): void {
    this.getApiFun();
  }

  trainingList: any;

  addCart(product:any) {
    this._store.dispatch(addCart(product));
  }

  getApiFun() {
    this._trainingService.getAll().subscribe((getAllProductData) => {
      this.trainingList = getAllProductData.rows;
    })
  }

}
