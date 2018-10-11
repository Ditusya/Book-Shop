import { Component, OnInit } from '@angular/core';

import { CartItemModel} from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  soldBooks: Array<CartItemModel>;

  constructor() {
    this.soldBooks = [
      {id: 1, name: 'Первая купленная книга'},
      {id: 2, name: 'Вторая купленная книга'},
      {id: 3, name: 'Третья купленная книга'}
    ];
  }
  ngOnInit() {
  }

}
