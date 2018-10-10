import { Component, OnInit } from '@angular/core';

import { BookModel } from '../../models/book.model';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Array<BookModel>;

  constructor() {
    this.books = [
      {id: 1, name: 'Первая книга'},
      {id: 2, name: 'Вторая книга'},
      {id: 3, name: 'Третья книга'}
    ];
  }

  ngOnInit() {
  }

}
