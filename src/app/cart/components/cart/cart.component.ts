import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';





@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  soldBooks: Array<CartItemModel>;

  constructor() {
    this.soldBooks = [
      {id: 1, name: 'Первая купленная книга', price: 30, img: 'img', quantity: 3},
      {id: 2, name: 'Вторая купленная книга', price: 150, img: 'img3', quantity: 1},
      {id: 3, name: 'Третья купленная книга', price: 110, img: 'img8', quantity: 6},
    ];
  }
  ngOnInit() {
  }

}
