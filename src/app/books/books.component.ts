import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  sub: Subscription = new Subscription();

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getBooks(): void {
    this.sub = this.booksService
      .getBooks()
      .subscribe((books) => (this.books = books));
  }
}
