import { Component } from '@angular/core';

import { CartComponent} from './cart/components/cart/cart.component';
import { BookListComponent} from './products/components/book-list/book-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book-Shop';
}
